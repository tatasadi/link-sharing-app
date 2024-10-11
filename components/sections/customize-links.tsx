'use client'
import { Button } from '../ui/button'
import Group from '@/public/Group.svg'
import Image from 'next/image'
import EditLink from '../edit-link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../ui/form'
import { v4 as uuidv4 } from 'uuid'
import { useStore } from '@/app/useStore'

const formSchema = z.object({
	links: z.array(
		z.object({
			id: z.string(),
			platform: z.string(),
			url: z.string(),
		}),
	),
})

export default function CustomizeLinks() {
	const { links, addLink } = useStore()
	console.log(links)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			links,
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values)
	}

	return (
		<section className="flex flex-col p-6 sm:p-10">
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Customize your links</h2>
			<p className="text-body-m text-gray mt-2 mb-10">
				Add/edit/remove links below and then share all your profiles with the world!
			</p>
			<Button type="button" variant="secondary" className="w-full mb-6" onClick={addLink}>
				+ Add new link
			</Button>
			{links.length === 0 ? (
				<div className="flex flex-col justify-center items-center gap-6 bg-light-gray rounded-xl p-5 text-center">
					<Image src={Group} alt="a finger touching a cellphone" />
					<h3 className="text-2xl font-bold leading-9 text-dark-gray">Let’s get you started</h3>
					<p className="text-body-m text-gray max-w-[30rem]">
						Use the “Add new link” button to get started. Once you have more than one link, you can
						reorder and edit them. We’re here to help you share your profiles with everyone!
					</p>
				</div>
			) : (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
						{links.map((link, index) => {
							return (
								<div key={link.id}>
									<EditLink index={index} link={link} formControl={form.control} />
								</div>
							)
						})}
					</form>
				</Form>
			)}
		</section>
	)
}
