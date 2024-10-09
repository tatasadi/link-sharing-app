import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Link Sharing App',
	description: 'A Frontend Mentor challenge',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Providers>
				<body className={`${inter.className} bg-light-gray`}>{children}</body>
			</Providers>
		</html>
	)
}
