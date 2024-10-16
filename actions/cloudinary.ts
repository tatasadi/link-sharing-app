'use server'

import { v2 as cloudinary } from 'cloudinary'

const cloudinaryConfig = cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET || '',
	secure: true,
})

export async function getSignature() {
	const timestamp = Math.round(new Date().getTime() / 1000)

	const signature = cloudinary.utils.api_sign_request(
		{ timestamp, folder: 'next' },
		cloudinaryConfig.api_secret!,
	)

	return { timestamp, signature }
}

export async function saveToDatabase({
	public_id,
	version,
	signature,
}: {
	public_id: string
	version: string
	signature: string
}) {
	// verify the data
	const expectedSignature = cloudinary.utils.api_sign_request(
		{ public_id, version },
		cloudinaryConfig.api_secret!,
	)

	if (expectedSignature === signature) {
		// safe to write to database
		console.log({ public_id })
	}
}

export async function uploadToCloudinary(file: File) {
	if (!file) return

	// get a signature using server action
	const { timestamp, signature } = await getSignature()

	// upload to cloudinary using the signature
	const formData = new FormData()

	formData.append('file', file)
	const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
	if (!apiKey) {
		throw new Error('Cloudinary API key is not defined')
	}
	formData.append('api_key', apiKey)
	formData.append('signature', signature)
	formData.append('timestamp', timestamp.toString())
	formData.append('folder', 'next')

	const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
	if (!endpoint) {
		throw new Error('Cloudinary upload URL is not defined')
	}
	const data = await fetch(endpoint, {
		method: 'POST',
		body: formData,
	}).then(res => res.json())

	// write to database using server actions
	await saveToDatabase({
		version: data?.version,
		signature: data?.signature,
		public_id: data?.public_id,
	})
}
