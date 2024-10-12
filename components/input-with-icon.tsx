import * as React from 'react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import { FormField, FormItem, FormLabel, FormMessage } from './ui/form'

interface InputWithIconProps {
	icon?: StaticImageData
	iconAlt?: string
	className?: string
	error?: string
	label?: string
	name: string
	inputClassName?: string
	[key: string]: any
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
	icon,
	iconAlt = '',
	className = '',
	error = '',
	label = '',
	name,
	inputClassName,
	control,
	...props
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={className}>
					{label && <FormLabel className="text-xs">{label}</FormLabel>}
					<div className="grid items-center *:col-start-1 *:row-start-1 mt-1">
						{icon && <Image src={icon} className="z-10 ml-4" alt={iconAlt} />}
						<Input
							className={cn(
								'py-3',
								icon ? 'px-10' : 'px-4',
								error ? 'text-red border-red' : '',
								inputClassName,
							)}
							{...field}
							{...props}
						/>
						<FormMessage className="justify-self-end pr-4 z-10" />
					</div>
				</FormItem>
			)}
		/>
	)
}

export default InputWithIcon
