import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

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
	const session = await auth()
	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={`${inter.className} bg-light-gray`}>{children}</body>
			</html>
		</SessionProvider>
	)
}
