import { Button } from './ui/button'
import Image, { StaticImageData } from 'next/image'

export default function ButtonWithIcon({
	icon,
	children,
	variant = 'ghost',
	isActive = false,
	...props
}: {
	icon: React.ReactNode
	iconAlt: string
	children: React.ReactNode
	isActive: boolean
} & React.ComponentProps<typeof Button>) {
	return (
		<Button variant={variant} {...props} className={isActive ? 'bg-light-purple text-purple' : ''}>
			<span className="flex items-center gap-2">
				{icon}
				<span className="hidden sm:block">{children}</span>
			</span>
		</Button>
	)
}
