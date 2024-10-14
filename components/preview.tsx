'use client'
import Image, { StaticImageData } from 'next/image'
import PreviewLinkItem from './preview-link-item'
import { cn } from '@/lib/utils'
import { Link, useStore } from '@/app/useStore'
import { useEffect, useState } from 'react'

export default function Preview({
	size = 'md',
	showLinksPreview = false,
}: {
	size?: 'md' | 'lg'
	showLinksPreview?: boolean
}) {
	const { links, profile, profileImage } = useStore()
	const { firstName, lastName, email } = profile
	const name = `${firstName} ${lastName}`.trim()
	const previewLinksLength = showLinksPreview ? (5 - links.length <= 0 ? 0 : 5 - links.length) : 0

	const [imageSrc, setImageSrc] = useState<string | null>(null)

	useEffect(() => {
		if (profileImage.image) {
			setImageSrc(URL.createObjectURL(profileImage.image))
		}
	}, [profileImage.image])

	return (
		<div>
			<div className="grid place-items-center gap-6">
				<div
					className={cn(
						'rounded-full bg-very-light-gray size-24',
						size === 'lg' ? 'size-[6.5rem]' : '',
					)}
				>
					{imageSrc && (
						<Image
							src={imageSrc}
							alt="profile image"
							width={80}
							height={80}
							className="rounded-full w-full h-full object-cover object-center"
						/>
					)}
				</div>
				<div className="flex flex-col items-center gap-2 text-center">
					<h2
						className={`text-dark-gray min-w-40 min-h-4 ${name ? '' : 'bg-very-light-gray rounded-full'} ${size === 'lg' ? 'text-heading-m' : 'text-lg font-semibold'}`}
					>
						{name}
					</h2>
					<p
						className={`text-gray min-w-[4.5rem] min-h-2 ${email ? '' : 'bg-very-light-gray rounded-full'} ${size === 'lg' ? '' : 'text-sm'}`}
					>
						{email}
					</p>
				</div>
			</div>
			<div
				className={cn(
					'mt-14 flex flex-col gap-5',
					size === 'md' ? 'overflow-y-auto max-h-[18.75rem] hide-scrollbar' : '',
				)}
			>
				{links.map(link => (
					<PreviewLinkItem
						key={link.id}
						icon={link.icon}
						className={`${link.className} ${size === 'lg' ? '' : 'text-xs py-3'}`}
						url={link.url}
					>
						{link.platform}
					</PreviewLinkItem>
				))}
				{Array.from({ length: previewLinksLength }).map((_, index) => (
					<div key={index} className="bg-very-light-gray rounded-lg h-[2.75rem] w-full"></div>
				))}
			</div>
		</div>
	)
}
