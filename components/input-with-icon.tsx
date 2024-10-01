import * as React from 'react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import { Label } from './ui/label'

interface InputWithIconProps {
	icon?: StaticImageData
	iconAlt?: string
	className?: string
	error?: string
	label?: string
	id: string
	[key: string]: any
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
	icon,
	iconAlt = '',
	className = '',
	error = '',
	label = '',
	id,
	...props
}) => {
	return (
		<>
			{label && (
				<Label className={cn('text-xs', error ? 'text-red' : '')} htmlFor={id}>
					{label}
				</Label>
			)}
			<div className="grid items-center *:col-start-1 *:row-start-1 mt-1">
				{icon && <Image src={icon} className="z-10 ml-4" alt={iconAlt} />}
				<Input
					className={cn(
						'py-3',
						icon ? 'px-10' : 'px-4',
						error ? 'text-red border-red' : '',
						className,
					)}
					id={id}
					name={id}
					aria-invalid={!!error}
					aria-describedby={error ? `${id}-error` : undefined}
					{...props}
				/>
				{error && (
					<p id={`${id}-error`} className="text-red text-xs justify-self-end pr-4 z-10">
						{error}
					</p>
				)}
			</div>
		</>
	)
}

export default InputWithIcon
