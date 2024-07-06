import { Button } from '../ui/button'

export default function Empty() {
	return (
		<section className="flex flex-col bg-white p-8 rounded-xl">
			<div className="mb-28">
				<h5 className="text-2xl font-bold leading-9 text-pure-gray">
					Customize your links
				</h5>
				<p className="text-body-m text-stone-gray my-6">
					Add/edit/remove links below and then share all your profiles
					with the world!
				</p>
				<Button variant="secondary" className="w-full mt-2">
					+ Add new link
				</Button>
			</div>
			<div className="flex flex-col justify-center items-center gap-6">
				<img src="@/Group.svg" alt="icon" />
				<h6 className="text-2xl font-bold leading-9 text-pure-gray">
					Let’s get you started
				</h6>
				<p className="text-body-m text-stone-gray mb-20 md:px-20">
					Use the “Add new link” button to get started. Once you have
					more than one link, you can reorder and edit them. We’re
					here to help you share your profiles with everyone!
				</p>
			</div>
			<div className="w-full h-[.15rem] bg-dark-gray"></div>
			<Button className="mt-4 opacity-25 w-full md:w-[6rem] md:ml-auto">
				Save
			</Button>
		</section>
	)
}
