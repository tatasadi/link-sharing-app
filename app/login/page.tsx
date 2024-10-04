import Logo from '@/components/logo'
import Login from '@/components/sections/login'

export default function LoginPage() {
	return (
		<main className="min-h-screen bg-white sm:bg-transparent w-full flex justify-center sm:items-center">
			<div className="w-full sm:max-w-[27rem] flex flex-col sm:justify-center sm:items-center gap-8 sm:gap-12">
				<Logo className="pt-8 pl-8 sm:p-0" />
				<Login />
			</div>
		</main>
	)
}
