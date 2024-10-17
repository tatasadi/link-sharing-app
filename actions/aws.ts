'use server'
import { revalidatePath } from 'next/cache'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

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

async function uploadFileToS3(file: Buffer, fileName: string) {
	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `${fileName}`,
		Body: file,
		ContentType: 'image/jpg',
	}

	const command = new PutObjectCommand(params)
	try {
		const response = await s3Client.send(command)
		console.log('File uploaded successfully:', response)
		return fileName
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
		await uploadFileToS3(buffer, file.name)

		revalidatePath('/')
		return { status: 'success', message: 'File has been upload.' }
	} catch (error) {
		console.error(error)
		return { status: 'error', message: 'Failed to upload file.' }
	}
}
