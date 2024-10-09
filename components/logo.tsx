import solarLinkImage from '@/public/solar_link-circle-bold.svg'
import devlinks from '@/public/devlinks.svg'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Logo({ className = '' }: { className?: string }) {
	return (
		<div className={cn('flex gap-4 items-center', className)}>
			<Image src={solarLinkImage} alt="logo icon" />
			<Image src={devlinks} alt="logo text" className="hidden md:block" />
		</div>
	)
}
