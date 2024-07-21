import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Image from 'next/image'
import ph_lock from '@/public/ph_lock-key-fill.svg'
import ph_envelope from '@/public/ph_envelope-simple-fill.svg'
import solar_link from '@/public/solar_link-circle-bold.svg'
import devlinks from '@/public/devlinks.svg'

export default function Create() {
	return (
		<section className="bg-white p-8 rounded-xl">
			<div className="flex gap-4 items-center mb-24 md:justify-center">
				<Image src={solar_link} alt="icon" />
				<Image src={devlinks} alt="logo" />
			</div>
			<div className="mb-8">
				<h4 className="text-2xl font-bold leading-9 text-pure-gray">
					Create account
				</h4>
				<p className="text-body-m text-stone-gray">
					Let’s get you started sharing your links!
				</p>
			</div>
			<div className="mb-4">
				<label className="text-body-s text-pure-gray">
					Email address
				</label>
				<div className="flex relative mb-4">
					<Input
						type="email"
						placeholder="e.g. alex@email.com"
						className="px-9 py-3 opacity-50"
					/>
					<Image
						src={ph_envelope}
						className="absolute top-3 left-2"
						alt="icon"
					/>
				</div>
				<label className="text-body-s text-pure-gray">
					Create password
				</label>
				<div className="flex relative mb-4">
					<Input
						type="password"
						placeholder="At least .8 characters"
						className="px-9 py-3 opacity-50"
					/>
					<Image
						src={ph_lock}
						className="absolute top-3 left-2"
						alt="icon"
					/>
				</div>
				<label className="text-body-s text-pure-gray">
					Confirm password
				</label>
				<div className="flex relative">
					<Input
						type="password"
						placeholder="At least .8 characters"
						className="px-9 py-3 opacity-50"
					/>
					<Image
						src={ph_lock}
						className="absolute top-3 left-2"
						alt="icon"
					/>
				</div>
			</div>
			<p className="text-body-s text-stone-gray">
				Password must contain at least 8 characters
			</p>
			<Button className="w-full mt-4">Create new account</Button>
			<div className="md:flex gap-2 mt-8 items-center justify-center">
				<p className="text-center text-stone-gray text-body-m">
					Already have an account?
				</p>
				<p className="text-center text-royal-violet text-body-m">
					Login
				</p>
			</div>
		</section>
	)
}
