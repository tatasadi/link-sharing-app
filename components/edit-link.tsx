import ph_link from '@/public/ph_link-bold.svg'
import Image from 'next/image'
import { Input } from './ui/input'
import SocialDropdown from './social-dropdown'
import { Button } from './ui/button'

export default function EditLink() {
	return (
		<div className="bg-light-gray p-5 rounded-xl flex flex-col gap-3">
			<div className="flex items-center gap-2">
				<div className="flex flex-col gap-1">
					<div className="w-[0.75rem] h-[0.0625rem] bg-gray"></div>
					<div className="w-[0.75rem] h-[0.0625rem] bg-gray"></div>
				</div>
				<p className="font-bold text-gray">Link #1</p>
				<Button variant="ghost" className="ml-auto">
					Remove
				</Button>
			</div>
			<label className="text-body-s text-dark-gray">
				<span className="mb-1">Platform</span>
				<SocialDropdown />
			</label>
			<label className="text-body-s text-dark-gray">Link</label>

			<div className="flex relative mb-4">
				<Input
					type="email"
					placeholder="e.g. https://www.github.com/johnappleseed"
					className="px-9 py-3 opacity-50"
				/>
				<Image src={ph_link} className="absolute top-3 left-2" alt="icon" />
			</div>
		</div>
	)
}
