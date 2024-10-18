'use client'
import { useToast } from '@/hooks/use-toast'
import { Button } from './ui/button'
import { useCallback } from 'react'
import { FaLink } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

export default function ShareLink({ userId }: { userId?: string }) {
	const { toast } = useToast()

	const handleShareClick = useCallback(async () => {
		const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
		const shareLink = `${baseUrl}/${userId}`

		try {
			await navigator.clipboard.writeText(shareLink)
			toast({
				description: (
					<span className="flex items-center gap-4">
						<FaLink className="text-xl text-gray" />
						<span>The link has been copied to your clipboard!</span>
					</span>
				),
			})
		} catch (err) {
			toast({
				title: 'Error',
				description: (
					<span className="flex items-center gap-4">
						<MdError className="text-xl" />
						<span>Failed to copy the link. Please try again.</span>
					</span>
				),
				variant: 'destructive',
			})
			console.error('Failed to copy the link:', err)
		}
	}, [userId, toast])

	return <Button onClick={handleShareClick}>Share Link</Button>
}
