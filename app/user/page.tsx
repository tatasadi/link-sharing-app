import { auth } from '@/auth'
import User from '@/components/user'
import { redirect } from 'next/navigation'

export default async function UserPage() {
	const session = await auth()
	if (!session) {
		redirect('/login')
	}
	return (
		<div>
			<h1>User Page</h1>
			<User />
		</div>
	)
}
