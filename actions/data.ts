'use server'
import { Link, Profile, ProfileImage } from '@/app/useStore'
import { auth } from '@/auth'
import { linkSchema, profileSchema } from '@/lib/schema'
import { db } from '@/prisma/db'
import { z } from 'zod'

export async function SaveLinks({
	links,
}: {
	links: { id: string; platform: string; url: string }[]
}): Promise<{ success: boolean; error?: string }> {
	const linksValidation = z.array(linkSchema).safeParse(links)

	if (!linksValidation.success) {
		return { success: false, error: 'Invalid links data' }
	}

	const session = await auth()
	if (!session) {
		return { success: false, error: 'User is not authenticated' }
	}

	const userId = session.user?.id
	if (!userId) {
		return { success: false, error: 'User is not authenticated' }
	}

	await db.link.deleteMany({
		where: {
			userId,
		},
	})

	links.forEach(async link => {
		await db.link.create({
			data: {
				userId,
				platform: link.platform,
				url: link.url,
			},
		})
	})

	return { success: true }
}

export async function SaveProfile({
	profile,
	profileImage,
}: {
	profile: Profile
	profileImage?: ProfileImage
}) {
	console.log('Saving profile', profile, profileImage)

	const profileValidation = profileSchema.safeParse(profile)

	if (!profileValidation.success) {
		return {
			success: false,
			error: 'Invalid profile data',
		}
	}

	const session = await auth()
	if (!session) {
		return { success: false, error: 'User is not authenticated' }
	}

	const userId = session.user?.id
	if (!userId) {
		return { success: false, error: 'User is not authenticated' }
	}

	// update user
	await db.user.update({
		where: {
			id: userId,
		},
		data: {
			firstname: profile.firstName,
			lastname: profile.lastName,
			profileEmail: profile.email,
		},
	})
	return { success: true }
}
