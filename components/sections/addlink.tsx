import ph_link from '@/public/ph_link-bold.svg'
import Image from 'next/image'
import { Input } from '../ui/input'
import SocialDropdown from '../social-dropdown'

export default function Addlink() {
	return (
		<div>
			<div className="flex justify-between items-center mb-8">
				<p>Link #1</p>
				<p>Remove</p>
			</div>
			<label className="text-body-s text-dark-gray">Platform</label>
			<SocialDropdown />
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
