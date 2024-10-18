import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/app/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Link Sharing App',
	description:
		'An intuitive platform for developers to create personalized profiles that consolidate links to all their social media accounts, making it easy to share their online presence with others.',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Providers>
				<body className={`${inter.className} bg-light-gray`}>
					{children}
					<Toaster />
				</body>
			</Providers>
		</html>
	)
}
