import { Button } from '../ui/button'
import Group from '@/public/Group.svg'
import Image from 'next/image'
import illustration from '@/public/illustration-phone-mockup.svg'

export default function Empty() {
	return (
		<div className="flex gap-8 items-center bg-pure-snow w-full p-6">
			<div className="hidden lg:block bg-white lg:w-1/3 lg:min-h-[48rem] px-6 py-24 rounded-xl">
				<Image src={illustration} alt="icon" />
			</div>
			<section className="flex flex-col bg-white p-8 rounded-xl lg:w-2/3">
				<div className="mb-28">
					<h5 className="text-2xl font-bold leading-9 text-pure-gray">
						Customize your links
					</h5>
					<p className="text-body-m text-stone-gray my-6">
						Add/edit/remove links below and then share all your
						profiles with the world!
					</p>
					<Button variant="secondary" className="w-full mt-2">
						+ Add new link
					</Button>
				</div>
				<div className="flex flex-col justify-center items-center gap-6">
					<Image src={Group} alt="icon" />
					<h6 className="text-2xl font-bold leading-9 text-pure-gray">
						Let’s get you started
					</h6>
					<p className="text-body-m text-stone-gray mb-20 md:px-20">
						Use the “Add new link” button to get started. Once you
						have more than one link, you can reorder and edit them.
						We’re here to help you share your profiles with everyone!
					</p>
				</div>
				<div className="w-full h-[.15rem] bg-dark-gray"></div>
				<Button className="mt-4 opacity-25 w-full md:w-[6rem] md:ml-auto">
					Save
				</Button>
			</section>
		</div>
	)
}
