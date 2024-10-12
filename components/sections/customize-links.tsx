'use client'
import { Button } from '../ui/button'
import Group from '@/public/Group.svg'
import Image from 'next/image'
import EditLink from '../edit-link'
import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { Form } from '../ui/form'
import { useStore } from '@/app/useStore'
import { useEffect, useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	links: z.array(
		z
			.object({
				id: z.string(),
				platform: z.string().min(1, 'Platform is required'),
				url: z.string().url('Must be a valid URL'),
			})
			.refine(
				link => {
					const platform = link.platform.toLowerCase()
					const url = link.url.toLowerCase()

					if (platform === 'github' && !url.includes('github.com')) {
						return false
					}
					if (platform === 'frontend mentor' && !url.includes('frontendmentor.io')) {
						return false
					}
					if (platform === 'twitter' && !url.includes('twitter.com') && !url.includes('x.com')) {
						return false
					}
					if (platform === 'linkedin' && !url.includes('linkedin.com')) {
						return false
					}
					if (platform === 'youtube' && !url.includes('youtube.com')) {
						return false
					}
					if (platform === 'facebook' && !url.includes('facebook.com')) {
						return false
					}
					if (platform === 'twitch' && !url.includes('twitch.tv')) {
						return false
					}
					if (platform === 'dev.to' && !url.includes('dev.to')) {
						return false
					}
					if (platform === 'codewars' && !url.includes('codewars.com')) {
						return false
					}
					if (platform === 'freecodecamp' && !url.includes('freecodecamp.org')) {
						return false
					}
					if (platform === 'gitlab' && !url.includes('gitlab.com')) {
						return false
					}
					if (platform === 'hashnode' && !url.includes('hashnode.com')) {
						return false
					}
					if (platform === 'stack overflow' && !url.includes('stackoverflow.com')) {
						return false
					}

					return true
				},
				{ message: 'Please check the URL', path: ['url'] },
			),
	),
})

export type LinksFormType = z.infer<typeof formSchema>

export default function CustomizeLinks() {
	const { links, addLink, updateLink } = useStore()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			links,
		},
		mode: 'all',
	})

	const linksInState = useWatch({ control: form.control, name: 'links' })
	const prevLinksRef = useRef(links)

	useEffect(() => {
		if (JSON.stringify(prevLinksRef.current) !== JSON.stringify(links)) {
			form.setValue('links', links)
			prevLinksRef.current = links
		}
	}, [links, form])

	useEffect(() => {
		if (JSON.stringify(prevLinksRef.current) !== JSON.stringify(linksInState)) {
			linksInState.forEach((link, index) => {
				updateLink(link.id, link.platform, link.url)
			})
			prevLinksRef.current = linksInState
			if (form.formState.isDirty) {
				form.trigger('links') // Trigger validation only if the form is dirty
			}
		}
	}, [form, linksInState, updateLink])

	function handleAddLink() {
		addLink()
		form.setValue('links', [...links])
	}

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log('form values after submit', values)
	}

	return (
		<section className="flex flex-col p-6 sm:p-10">
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Customize your links</h2>
			<p className="text-body-m text-gray mt-2 mb-10">
				Add/edit/remove links below and then share all your profiles with the world!
			</p>
			<Button type="button" variant="secondary" className="w-full mb-6" onClick={handleAddLink}>
				+ Add new link
			</Button>
			{linksInState.length === 0 ? (
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
						{linksInState.map((link, index) => (
							<div key={link.id}>
								<EditLink index={index} link={link} form={form} />
							</div>
						))}
					</form>
				</Form>
			)}
		</section>
	)
}
