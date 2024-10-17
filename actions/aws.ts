'use server'
import { revalidatePath } from 'next/cache'
import {
	S3Client,
	PutObjectCommand,
	DeleteObjectCommand,
	GetObjectCommand,
} from '@aws-sdk/client-s3'
import sharp from 'sharp'
import { auth } from '@/auth'

const session = await auth()

if (!session) {
	throw new Error('Not authenticated')
}

const userId = session?.user?.id

if (
	!process.env.AWS_REGION ||
	!process.env.AWS_ACCESS_KEY_ID ||
	!process.env.AWS_SECRET_ACCESS_KEY
) {
	throw new Error('Missing AWS configuration environment variables')
}

const s3Client = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
})

async function uploadFileToS3(file: Buffer) {
	const fileBuffer = await sharp(file)
		.jpeg({ quality: 90 })
		.resize(400, 400, { fit: 'cover', position: 'center' })
		.toBuffer()

	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `${userId}`,
		Body: fileBuffer,
		ContentType: 'image/jpg',
	}

	const command = new PutObjectCommand(params)
	try {
		const response = await s3Client.send(command)
		console.log('File uploaded successfully:', response)
		return userId
	} catch (error) {
		throw error
	}
}

export async function uploadFile(formData: FormData) {
	const file = formData.get('file') as File
	try {
		if (file.size === 0) {
			return { status: 'error', message: 'Please select a file.' }
		}

		const buffer = Buffer.from(await file.arrayBuffer())
		await uploadFileToS3(buffer)

		revalidatePath('/')
		return { status: 'success', message: 'File has been upload.' }
	} catch (error) {
		console.error(error)
		return { status: 'error', message: 'Failed to upload file.' }
	}
}

export async function deleteFile() {
	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `${userId}`, // Use the same key that was used for upload
	}

	const command = new DeleteObjectCommand(params)
	try {
		const response = await s3Client.send(command)
		console.log('File deleted successfully:', response)
		return { status: 'success', message: 'File deleted successfully.' }
	} catch (error) {
		console.error('Error deleting file:', error)
		throw new Error('Failed to delete file.')
	}
}
