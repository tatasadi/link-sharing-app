import { Button } from './ui/button'
import { FaPowerOff } from 'react-icons/fa'
import { logout } from '@/actions/auth'
import { useRouter } from 'next/navigation'
import { useStore } from '@/app/useStore'

export default function LogoutButton() {
	const route = useRouter()
	const { reset } = useStore()
	async function handleLogout() {
		await logout()
		reset()
		route.push('/login')
	}
	return (
		<form action={handleLogout}>
			<Button variant="ghost" type="submit">
				<FaPowerOff className="text-lg" />
			</Button>
		</form>
	)
}
