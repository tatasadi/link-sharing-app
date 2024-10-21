import { z } from 'zod'

export const linkSchema = z
	.object({
		id: z.string(),
		platform: z.string().min(1, 'Platform is required'),
		url: z.string().url('Must be a valid URL'),
		icon: z.any().optional(),
		className: z.string().optional(),
		order: z.number(),
	})
	.refine(
		link => {
			const platform = link.platform.toLowerCase()
			const url = link.url.toLowerCase()

			if (platform === 'github' && !url.includes('github.com')) {
				return false
			}
			if (platform === 'frontend mentor' && !url.includes('frontendmentor.io')) {
				return false
			}
			if (platform === 'twitter' && !url.includes('twitter.com') && !url.includes('x.com')) {
				return false
			}
			if (platform === 'linkedin' && !url.includes('linkedin.com')) {
				return false
			}
			if (platform === 'youtube' && !url.includes('youtube.com')) {
				return false
			}
			if (platform === 'facebook' && !url.includes('facebook.com')) {
				return false
			}
			if (platform === 'twitch' && !url.includes('twitch.tv')) {
				return false
			}
			if (platform === 'dev.to' && !url.includes('dev.to')) {
				return false
			}
			if (platform === 'codewars' && !url.includes('codewars.com')) {
				return false
			}
			if (platform === 'freecodecamp' && !url.includes('freecodecamp.org')) {
				return false
			}
			if (platform === 'gitlab' && !url.includes('gitlab.com')) {
				return false
			}
			if (platform === 'hashnode' && !url.includes('hashnode.com')) {
				return false
			}
			if (platform === 'stack overflow' && !url.includes('stackoverflow.com')) {
				return false
			}

			return true
		},
		{ message: 'Please check the URL', path: ['url'] },
	)

export const profileSchema = z.object({
	firstName: z.string().min(1, 'Can’t be empty'),
	lastName: z.string().min(1, 'Can’t be empty'),
	email: z.string().optional(),
})
