import { cn, isValidUrl } from '@/lib/utils'
import React from 'react'
import IconArrowRight from './icons/icon-arrow-right'
import { Button } from './ui/button'

export default function PreviewLinkItem({
	icon,
	children,
	className = '',
	url = '',
}: {
	icon: React.ReactNode
	children: React.ReactNode
	className?: string
	url?: string
}) {
	const colorPossibilities = [
		'bg-github', // GitHub
		'bg-frontendmentor', // Frontend Mentor
		'bg-twitter', // Twitter
		'bg-linkedin', // LinkedIn
		'bg-youtube', // YouTube
		'bg-facebook', // Facebook
		'bg-twitch', // Twitch
		'bg-codewars', // Codewars
		'bg-dark-gray', // Dev.to
		'bg-freecodecamp', // freeCodeCamp
		'bg-gitlab', // GitLab
		'bg-hashnode', // Hashnode
		'bg-stackoverflow', // Stack Overflow
	]

	const isUrlValid = isValidUrl(url)
	return (
		<a href={isUrlValid ? url : '#'} target={isUrlValid ? '_blank' : '_self'}>
			<Button
				variant="ghost"
				className={cn(
					'flex text-white p-4 min-w-[13.2rem] gap-2 rounded-lg items-center hover:text-white w-full',
					className,
				)}
			>
				{icon}
				{children}
				<span className="ml-auto">
					<IconArrowRight />
				</span>
			</Button>
		</a>
	)
}
