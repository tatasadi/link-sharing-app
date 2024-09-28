import * as React from 'react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

export default function InputWithIcon({
	icon,
	iconAlt = '',
	className = '',
	error = '',
	...props
}: {
	icon?: StaticImageData
	iconAlt?: string
	className?: string
	error?: string
}) {
	console.log('icon', icon)
	return (
		<div className="grid items-center">
			<Input
				className={cn(
					'py-3 col-start-1 row-start-1',
					icon ? 'px-10' : 'px-4',
					error ? 'text-red border-red' : '',
					className,
				)}
				{...props}
			/>
			{error && (
				<p className="text-red text-body-s col-start-1 row-start-1 justify-self-end pr-4">
					{error}
				</p>
			)}
			{icon && <Image src={icon} className="col-start-1 row-start-1 ml-4" alt={iconAlt} />}
		</div>
	)
}
