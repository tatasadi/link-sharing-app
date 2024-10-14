'use client'
import { cn } from '@/lib/utils'
import { Label } from './label'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import IconImage from '../icons/icon-image'
import { useStore } from '@/app/useStore'

export default function Upload({ className = '' }: { className?: string }) {
	const { profileImage, updateProfileImage } = useStore()
	const [imageSrc, setImageSrc] = useState<string | null>(null)

	useEffect(() => {
		if (profileImage.image) {
			setImageSrc(URL.createObjectURL(profileImage.image))
		}
	}, [profileImage.image])

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0]
		if (!file) return
		//setImageSrc(URL.createObjectURL(file))
		updateProfileImage(file)
	}

	return (
		<div className={cn('grid sm:grid-cols-[1fr_auto] sm:items-center gap-6', className)}>
			<Label
				className={cn(
					'relative rounded-xl overflow-hidden aspect-square cursor-pointer px-6 py-8 md:px-10 md:py-[3.75rem] w-[13rem]',
					imageSrc ? 'bg-black' : 'bg-light-purple',
				)}
			>
				{imageSrc && (
					<Image
						src={imageSrc}
						alt="uploaded image"
						className="absolute inset-0 object-cover object-center z-0 h-full w-full opacity-75"
						width={48}
						height={48}
					/>
				)}
				<span
					className={cn(
						'z-10 relative grid place-content-center place-items-center justify-center h-full gap-2',
						imageSrc ? 'text-white' : 'text-purple',
					)}
				>
					<IconImage />
					<span className="text-semibold">{imageSrc ? 'Change Image' : '+ Upload Image'}</span>
				</span>
				<input accept="image/*" type="file" className="hidden" onChange={handleInputChange} />
			</Label>
			<p className="text-xs text-gray">Image must be below 1024x1024px. Use PNG or JPG format.</p>
		</div>
	)
}
