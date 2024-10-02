import React from 'react'
import { Button } from './ui/button'
import Image, { StaticImageData } from 'next/image'
import arrowRight from '@/public/mdi_arrow-right.svg'
import { cn } from '@/lib/utils'
import IconGithub from './icons/icon-github'
import IconArrowRight from './icons/icon-arrow-right'

export default function PreviewLinkItem({
	icon,
	iconAlt,
	children,
	className = '',
}: {
	icon: React.ReactNode
	iconAlt: string
	children: React.ReactNode
	className?: string
}) {
	const colorPossibilities = ['bg-github', 'bg-twitter', 'bg-linkedin', 'bg-youtube']

	return (
		<Button
			variant="ghost"
			className={cn(
				'flex text-white p-4 min-w-[13.2rem] gap-2 rounded-lg items-center hover:text-white',
				className,
			)}
		>
			{icon}
			{children}
			<span className="ml-auto">
				<IconArrowRight />
			</span>
		</Button>
	)
}
