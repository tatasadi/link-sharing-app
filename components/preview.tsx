import Image from 'next/image'
import PreviewLinkItem from './preview-link-item'
import { cn } from '@/lib/utils'
import { Link, Profile } from '@/app/useStore'

export default function Preview({
	size = 'md',
	showLinksPreview = false,
	links = [],
	profile,
	profileImageUrl,
}: {
	size?: 'md' | 'lg'
	showLinksPreview?: boolean
	links?: Link[]
	profile?: Profile
	profileImageUrl?: string
}) {
	const { firstName, lastName, email } = profile || {}
	const name = `${firstName ?? ''} ${lastName ?? ''}`.trim()
	const previewLinksLength = showLinksPreview ? (5 - links.length <= 0 ? 0 : 5 - links.length) : 0

	return (
		<div>
			<div className={cn('grid place-items-center', size === 'lg' ? 'gap-10' : 'gap-4')}>
				<div
					className={cn(
						'rounded-full bg-very-light-gray size-24',
						size === 'lg' ? 'size-[8rem]' : '',
						!showLinksPreview && !profileImageUrl ? 'size-0' : '',
					)}
				>
					{profileImageUrl && (
						<Image
							src={profileImageUrl}
							alt="profile image"
							width={500}
							height={500}
							className="rounded-full w-full h-full object-cover object-center"
						/>
					)}
				</div>
				<div className="flex flex-col items-center gap-2 text-center">
					<h2
						className={`text-dark-gray min-w-40 min-h-4 ${
							name ? '' : 'bg-very-light-gray rounded-full'
						} ${size === 'lg' ? 'text-heading-m' : 'text-lg font-semibold'}`}
					>
						{name}
					</h2>
					<p
						className={`text-gray min-w-[4.5rem] min-h-2 ${
							email ? '' : showLinksPreview ? 'bg-very-light-gray rounded-full' : ''
						} ${size === 'lg' ? '' : 'text-sm'}`}
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
