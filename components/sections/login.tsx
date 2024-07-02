import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Login() {
	return (
		<section className="bg-white p-8 rounded-xl">
			<div className="flex gap-4 items-center mb-24 md:justify-center">
				<img src="/solar_link-circle-bold.svg" alt="icon" />
				<img src="/devlinks.svg" alt="logo" />
			</div>
			<div className="mb-8">
				<h4 className="text-2xl font-bold leading-9 text-pure-gray">Login bla bla</h4>
				<p className="text-body-m text-stone-gray">
					Add your details below to get back into the app
				</p>
			</div>
			<div className="mb-4">
				<label className="text-body-s text-pure-gray">Email address</label>
				<div className="flex relative mb-4">
					<Input type="email" placeholder="e.g. alex@email.com" className="px-9 py-3 opacity-50" />
					<img src="/ph_envelope-simple-fill.svg" className="absolute top-3 left-2" alt="icon" />
				</div>
				<label className="text-body-s text-pure-gray">Password</label>
				<div className="flex relative">
					<Input
						type="password"
						placeholder="Enter your password"
						className="px-9 py-3 opacity-50"
					/>
					<img src="/ph_lock-key-fill.svg" className="absolute top-3 left-2" alt="icon" />
				</div>
			</div>
			<Button className="w-full mt-4">Login</Button>
			<div className="md:flex gap-2 mt-8 items-center justify-center">
				<p className="text-center text-stone-gray text-body-m">Don’t have an account?</p>
				<p className="text-center text-royal-violet text-body-m">Create account</p>
			</div>
		</section>
	)
}
