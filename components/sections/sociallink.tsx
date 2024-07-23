import Image from 'next/image'
import illustration from '@/public/illustration-phone-mockup.svg'
import ph_link from '@/public/ph_link-bold.svg'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectSeparator,
} from '@/components/ui/select'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function Sociallink() {
	return (
		<div className="flex gap-8 justify-between items-center bg-white w-full">
			<div className="hidden lg:block">
				<Image src={illustration} className="ml-4" alt="icon" />
			</div>
			<section className="flex flex-col bg-white p-8 rounded-xl">
				<div className="mb-28">
					<h5 className="text-2xl font-bold leading-9 text-pure-gray">
						Customize your links
					</h5>
					<p className="text-body-m text-stone-gray my-6">
						Add/edit/remove links below and then share all your
						profiles with the world!
					</p>
					<Button className="w-full mt-2">+ Add new link</Button>
				</div>
				<div className="bg-pure-snow mb-8 p-6 rounded-xl">
					<div className="flex justify-between items-center mb-8">
						<p className="text-heading-s text-stone-gray">Link #1</p>
						<p className="text-body-m text-stone-gray">Remove</p>
					</div>
					<label className="text-body-s text-pure-gray">
						Platform
					</label>
					<Select>
						<SelectTrigger className="mb-6">
							<SelectValue placeholder="Dropdown Field Default" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Item 1</SelectItem>
							<SelectSeparator />
							<SelectItem value="dark">Item 2</SelectItem>
							<SelectSeparator />
							<SelectItem value="system">Item 3</SelectItem>
						</SelectContent>
					</Select>
					<label className="text-body-s text-pure-gray">Link</label>
					<div className="flex relative mb-4">
						<Input
							type="email"
							placeholder="e.g. https://www.github.com/johnappleseed"
							className="px-9 py-3 opacity-50"
						/>
						<Image
							src={ph_link}
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
				</div>
				<div className="bg-pure-snow mb-8 p-6 rounded-xl">
					<div className="flex justify-between items-center mb-8">
						<p className="text-heading-s text-stone-gray">Link #2</p>
						<p className="text-body-m text-stone-gray">Remove</p>
					</div>
					<label className="text-body-s text-pure-gray">
						Platform
					</label>
					<Select>
						<SelectTrigger className="mb-6">
							<SelectValue placeholder="Dropdown Field Default" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light"></SelectItem>
							<SelectSeparator />
							<SelectItem value="dark">Item 2</SelectItem>
							<SelectSeparator />
							<SelectItem value="system">Item 3</SelectItem>
							<SelectSeparator />
						</SelectContent>
					</Select>
					<label className="text-body-s text-pure-gray">Link</label>
					<div className="flex relative mb-4">
						<Input
							type="email"
							placeholder="e.g. https://www.github.com/johnappleseed"
							className="px-9 py-3 opacity-50"
						/>
						<Image
							src={ph_link}
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
				</div>
				<div className="w-full h-[.15rem] bg-dark-gray md:mt-20"></div>
				<Button className="mt-4 w-full md:w-[6rem] md:ml-auto">
					Save
				</Button>
			</section>
		</div>
	)
}
