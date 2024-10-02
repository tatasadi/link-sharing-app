'use client'
import { cn } from '@/lib/utils'
import { Label } from './label'
import Image from 'next/image'
import { useState } from 'react'
import IconImage from '../icons/icon-image'

export default function Upload() {
	const [imageSrc, setImageSrc] = useState<string | null>(null)

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0]
		if (!file) return
		setImageSrc(URL.createObjectURL(file))
	}

	return (
		<div className="flex flex-col sm:flex-row sm:items-center gap-6 ">
			<Label
				className={cn(
					'relative rounded-xl overflow-hidden aspect-square max-w-48 cursor-pointer p-6',
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
					<span className="text-heading-s">{imageSrc ? 'Change Image' : '+ Upload Image'}</span>
				</span>
				<input accept="image/*" type="file" className="hidden" onChange={handleInputChange} />
			</Label>
			<p className="text-body-s text-gray">
				Image must be below 1024x1024px. Use PNG or JPG format.
			</p>
		</div>
	)
}
