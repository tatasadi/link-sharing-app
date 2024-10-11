import { cn } from '@/lib/utils'
import React from 'react'
import IconArrowRight from './icons/icon-arrow-right'
import { Button } from './ui/button'

export default function PreviewLinkItem({
	icon,
	children,
	className = '',
}: {
	icon: React.ReactNode
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
