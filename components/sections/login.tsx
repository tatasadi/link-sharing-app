import { Input } from '../ui/input'
import { Button } from '../ui/button'
import solarLinkImage from '@/public/solar_link-circle-bold.svg'
import devlinks from '@/public/devlinks.svg'
import phenvelope from '@/public/ph_envelope-simple-fill.svg'
import phlock from '@/public/ph_lock-key-fill.svg'
import Image from 'next/image'

export default function Login() {
	return (
		<section className="bg-white p-8 rounded-xl">
			<div className="flex gap-4 items-center mb-24 md:justify-center">
				<Image src={solarLinkImage} alt="icon" />
				<Image src={devlinks} alt="logo" />
			</div>
			<div className="mb-8">
				<h4 className="text-2xl font-bold leading-9 text-dark-gray">Login bla bla</h4>
				<p className="text-body-m text-gray">Add your details below to get back into the app</p>
			</div>
			<div className="mb-4">
				<label className="text-body-s text-dark-gray">Email address</label>
				<div className="flex relative mb-4">
					<Input type="email" placeholder="e.g. alex@email.com" className="px-9 py-3 opacity-50" />
					<Image src={phenvelope} className="absolute top-3 left-2" alt="icon" />
				</div>
				<label className="text-body-s text-dark-gray">Password</label>
				<div className="flex relative">
					<Input
						type="password"
						placeholder="Enter your password"
						className="px-9 py-3 opacity-50"
					/>
					<Image src={phlock} className="absolute top-3 left-2" alt="icon" />
				</div>
			</div>
			<Button className="w-full mt-4">Login</Button>
			<div className="md:flex gap-2 mt-8 items-center justify-center">
				<p className="text-center text-gray text-body-m">Don’t have an account?</p>
				<p className="text-center text-purple text-body-m">Create account</p>
			</div>
		</section>
	)
}
