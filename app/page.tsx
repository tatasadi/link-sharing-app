import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
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
