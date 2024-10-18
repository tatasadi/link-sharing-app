'use client'

import ButtonWithIcon from './button-with-icon'
import Logo from './logo'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import LogoutButton from './logout-button'
import { MdRemoveRedEye } from 'react-icons/md'
import { FaLink } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'

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
				<ButtonWithIcon
					className="px-3 py-2 sm:px-7 sm:py-3"
					asChild
					icon={<FaLink className="text-xl" />}
					isActive={pathname === '/links'}
				>
					Links
				</ButtonWithIcon>
			</Link>
			<Link href="/profile" className="sm:mr-auto">
				<ButtonWithIcon
					className="px-3 py-2 sm:px-7 sm:py-3"
					asChild
					icon={<CgProfile className="text-xl" />}
					isActive={pathname === '/profile'}
				>
					Profile Details
				</ButtonWithIcon>
			</Link>
			<Link href="/preview">
				<Button variant="secondary" className="px-3 py-2 sm:px-7 sm:py-3">
					<span className="sm:hidden">
						<MdRemoveRedEye className="text-xl" />
					</span>
					<span className="hidden sm:block">Preview</span>
				</Button>
			</Link>
			<LogoutButton />
		</header>
	)
}
