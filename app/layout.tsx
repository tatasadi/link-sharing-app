import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/app/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Link Sharing App',
	description:
		'A full-stack link-sharing app built with React, TypeScript, Next.js, and Tailwind CSS. Users can manage personalized profile links, upload profile images to Amazon S3, and authenticate securely using NextAuth.',
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
