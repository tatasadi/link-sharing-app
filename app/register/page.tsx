import { auth } from '@/auth'
import Logo from '@/components/logo'
import Register from '@/components/sections/register'
import { redirect } from 'next/navigation'

export default async function RegisterPage() {
	const session = await auth()
	if (session) {
		redirect('/')
	}
	return (
		<main className="min-h-screen bg-white sm:bg-transparent w-full flex justify-center sm:items-center">
			<div className="w-full sm:max-w-[27rem] flex flex-col sm:justify-center sm:items-center gap-8 sm:gap-12">
				<Logo className="pt-8 pl-8 sm:p-0" />
				<Register />
			</div>
		</main>
	)
}
