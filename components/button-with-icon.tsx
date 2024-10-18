import { cn } from '@/lib/utils'
import { Button } from './ui/button'

export default function ButtonWithIcon({
	icon,
	children,
	variant = 'ghost',
	isActive = false,
	className = '',
	...props
}: {
	icon: React.ReactNode
	children: React.ReactNode
	isActive: boolean
	className?: string
} & React.ComponentProps<typeof Button>) {
	return (
		<Button
			variant={variant}
			{...props}
			className={cn(isActive ? 'bg-light-purple text-purple' : '', className)}
		>
			<span className="flex items-center gap-2">
				{icon}
				<span className="hidden sm:block">{children}</span>
			</span>
		</Button>
	)
}
