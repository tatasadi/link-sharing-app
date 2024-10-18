'use client'
import { useStore } from '@/app/useStore'
import Preview from '@/components/preview'

export default function PreviewWrapper({
	size = 'md',
	showLinksPreview = false,
}: {
	size?: 'md' | 'lg'
	showLinksPreview?: boolean
}) {
	const { links, profile, profileImageUrl } = useStore()
	return (
		<Preview
			size={size}
			showLinksPreview={showLinksPreview}
			links={links}
			profile={profile}
			profileImageUrl={profileImageUrl}
		/>
	)
}
