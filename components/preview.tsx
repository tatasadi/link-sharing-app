import Image, { StaticImageData } from 'next/image'
import PreviewLinkItem, { PreviewLinkItemType } from './preview-link-item'
import { cn } from '@/lib/utils'
import { Link } from '@/app/useStore'

export default function Preview({
	size = 'md',
	image,
	imageAlt = '',
	email = '',
	name = '',
	links = [],
	showLinksPreview = false,
}: {
	size?: 'md' | 'lg'
	image?: StaticImageData
	imageAlt?: string
	email?: string
	name?: string
	links?: Link[]
	showLinksPreview?: boolean
}) {
	const previewLinksLength = showLinksPreview ? (5 - links.length <= 0 ? 0 : 5 - links.length) : 0

	return (
		<div>
			<div className="grid place-items-center gap-6">
				<div
					className={cn(
						'rounded-full bg-very-light-gray size-24',
						size === 'lg' ? 'size-[6.5rem]' : '',
					)}
				>
					{image && <Image src={image} alt={imageAlt} />}
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
			<div className="mt-14 flex flex-col gap-5">
				{links.map(link => (
					<PreviewLinkItem
						key={link.platform}
						icon={link.icon}
						className={`${link.className} ${size === 'lg' ? '' : 'text-xs py-3'}`}
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
