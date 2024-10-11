import { Button } from '../ui/button'
import Group from '@/public/Group.svg'
import Image from 'next/image'

export default function CustomizeLinks() {
	return (
		<section className="flex flex-col p-6 sm:p-10">
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Customize your links</h2>
			<p className="text-body-m text-gray mt-2 mb-10">
				Add/edit/remove links below and then share all your profiles with the world!
			</p>
			<Button variant="secondary" className="w-full mb-6">
				+ Add new link
			</Button>
			<div className="flex flex-col justify-center items-center gap-6 bg-light-gray rounded-xl p-5 text-center">
				<Image src={Group} alt="a finger touching a cellphone" />
				<h3 className="text-2xl font-bold leading-9 text-dark-gray">Let’s get you started</h3>
				<p className="text-body-m text-gray max-w-[30rem]">
					Use the “Add new link” button to get started. Once you have more than one link, you can
					reorder and edit them. We’re here to help you share your profiles with everyone!
				</p>
			</div>
		</section>
	)
}
