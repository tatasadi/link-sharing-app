'use server'
import { Link, Profile } from '@/app/useStore'
import { auth } from '@/auth'
import { linkSchema, profileSchema } from '@/lib/schema'
import { db } from '@/prisma/db'
import { z } from 'zod'
import { notFound } from 'next/navigation'

export async function SaveLinks({
	links,
}: {
	links: Link[]
}): Promise<{ success: boolean; error?: string }> {
	const linksValidation = z.array(linkSchema).safeParse(links)

	console.log('links', links, linksValidation, linksValidation.error?.message)
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
				order: link.order,
			},
		})
	})

	return { success: true }
}

export async function SaveProfile({ profile }: { profile: Profile }) {
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

// Function to fetch user data from the database
export async function fetchUserData(id = ''): Promise<{
	success: boolean
	profile?: Profile
	links?: Link[]
	error?: string
	profileImageUrl?: string
}> {
	let userId = id

	if (!userId) {
		const session = await auth()
		if (!session) {
			return { success: false, error: 'User is not authenticated' }
		}

		userId = session.user?.id ?? ''
	}

	if (!userId) {
		return { success: false, error: 'User is not authenticated' }
	}

	// Fetch profile and links from the database
	const userProfile = await db.user.findUnique({
		where: { id: userId },
		include: {
			links: {
				orderBy: {
					order: 'asc',
				},
			},
		},
	})

	if (!userProfile) {
		return notFound()
	}

	// Format the data to match Zustand store structure
	const profile: Profile = {
		firstName: userProfile.firstname,
		lastName: userProfile.lastname,
		email: userProfile.profileEmail,
	}

	const links: Link[] = userProfile.links.map(link => ({
		id: link.id,
		platform: link.platform,
		url: link.url,
		order: link.order ?? 0,
	}))

	return { success: true, profile, links, profileImageUrl: userProfile.profileImageUrl ?? '' }
}
