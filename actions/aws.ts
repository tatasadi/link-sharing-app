'use server'
import { revalidatePath } from 'next/cache'
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import sharp from 'sharp'
import { auth } from '@/auth'
import { db } from '@/prisma/db'

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
		.jpeg()
		.resize(1024, 1024, { fit: 'cover', position: 'center' })
		.toBuffer()

	const timeStamp = new Date().getTime()

	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `${userId}${timeStamp}`,
		Body: fileBuffer,
		ContentType: 'image/jpg',
	}

	const command = new PutObjectCommand(params)
	try {
		const response = await s3Client.send(command)

		// Construct the image URL
		const profileImageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${userId}${timeStamp}`

		// Save the URL in the database
		await db.user.update({
			where: { id: userId },
			data: { profileImageUrl },
		})

		return profileImageUrl
	} catch (error) {
		throw error
	}
}

export async function uploadFile(formData: FormData) {
	const file = formData.get('file') as File
	try {
		if (file.size === 0) {
			return { status: 'error', message: 'Please select an image.' }
		}

		const buffer = Buffer.from(await file.arrayBuffer())
		const profileImageUrl = await uploadFileToS3(buffer)

		revalidatePath('/')
		return { status: 'success', message: 'File has been upload.', profileImageUrl }
	} catch (error) {
		console.error(error)
		return { status: 'error', message: 'Failed to upload file.' }
	}
}

export async function deleteFile(url: string) {
	// extract key from url
	const key = url.split('/').pop()
	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `${key}`,
	}

	const command = new DeleteObjectCommand(params)
	try {
		const response = await s3Client.send(command)

		// Remove the image URL from the database
		await db.user.update({
			where: { id: userId },
			data: { profileImageUrl: null },
		})

		return { status: 'success', message: 'File deleted successfully.' }
	} catch (error) {
		console.error('Error deleting file:', error)
		throw new Error('Failed to delete file.')
	}
}
