'use client'

import ButtonWithIcon from './button-with-icon'
import Logo from './logo'
import IconLink from './icons/icon-link'
import { Button } from './ui/button'
import IconProfile from './icons/icon-profile'
import IconEye from './icons/icon-eye'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import LogoutButton from './logout-button'

export default function Header({ className = '' }: { className?: string }) {
	const pathname = usePathname()
	return (
		<header
			className={cn(
				'flex bg-white p-4 pl-6 sm:rounded-xl sm:m-6 justify-between items-center',
				className,
			)}
		>
			<Logo />
			<Link href="/links" className="sm:ml-auto">
				<ButtonWithIcon asChild icon={<IconLink />} isActive={pathname === '/links'}>
					Links
				</ButtonWithIcon>
			</Link>
			<Link href="/profile" className="sm:mr-auto">
				<ButtonWithIcon asChild icon={<IconProfile />} isActive={pathname === '/profile'}>
					Profile Details
				</ButtonWithIcon>
			</Link>
			<Link href="/preview">
				<Button variant="secondary" className="px-3 py-2 sm:px-7 sm:py-3">
					<span className="sm:hidden">
						<IconEye />
					</span>
					<span className="hidden sm:block">Preview</span>
				</Button>
			</Link>
			<LogoutButton />
		</header>
	)
}
