import { auth, signOut } from '@/auth'
import Header from '@/components/header'
import InputWithIcon from '@/components/input-with-icon'
import Login from '@/components/sections/login'
import { Button } from '@/components/ui/button'
import Upload from '@/components/ui/upload'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
	const session = await auth()
	if (session) {
		redirect('/links')
	}
	return (
		<main className="min-h-screen w-full">
			{session ? (
				<form
					action={async () => {
						'use server'
						await signOut()
					}}
				>
					{JSON.stringify(session)} <br />
					<Button type="submit">Sign Out</Button>
				</form>
			) : (
				<Button asChild>
					<Link href="/login">Log In</Link>
				</Button>
			)}
		</main>
	)
}
