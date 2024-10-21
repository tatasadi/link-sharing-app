'use client'
import { Button } from '../ui/button'
import Group from '@/public/Group.svg'
import Image from 'next/image'
import EditLink from '../edit-link'
import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { Form } from '../ui/form'
import { Link, useStore } from '@/app/useStore'
import { useEffect, useRef, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { linkSchema } from '@/lib/schema'
import { SaveLinks } from '@/actions/data'
import { useToast } from '@/hooks/use-toast'
import { MdError } from 'react-icons/md'
import { PiFloppyDiskBackFill } from 'react-icons/pi'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

const formSchema = z.object({
	links: z.array(linkSchema),
})

export type LinksFormType = z.infer<typeof formSchema>

export default function CustomizeLinks() {
	const { toast } = useToast()
	const { links, addLink, updateLink, reorderLinks } = useStore()
	const [isPending, setIsPending] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			links,
		},
		mode: 'onBlur',
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
			linksInState.forEach(link => {
				updateLink(link.id, link.platform, link.url)
			})
			prevLinksRef.current = linksInState
		}
	}, [form, linksInState, updateLink])

	function handleAddLink() {
		addLink()
	}

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsPending(true)
		const { success, error } = await SaveLinks({
			links: links.map(link => ({
				id: link.id,
				platform: link.platform,
				url: link.url,
				order: link.order,
			})),
		})
		setIsPending(false)
		if (!success) {
			toast({
				description: (
					<span className="flex items-center gap-4">
						<MdError className="text-xl" />
						<span>{error}</span>
					</span>
				),
				variant: 'destructive',
			})
		} else {
			toast({
				description: (
					<span className="flex items-center gap-4">
						<PiFloppyDiskBackFill className="text-xl" />
						<span>Your changes have been successfully saved!</span>
					</span>
				),
			})
		}
	}

	const handleOnDragEnd = (result: any) => {
		const { source, destination } = result
		if (!destination) return

		const updatedLinks = [...links]
		const [reorderedLink] = updatedLinks.splice(source.index, 1)
		updatedLinks.splice(destination.index, 0, reorderedLink)

		reorderLinks(updatedLinks)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-rows-[1fr_auto] bg-white rounded-xl m-4 sm:m-6 sm:mt-0 lg:col-span-3"
			>
				<section className="flex flex-col p-6 sm:p-10">
					<h2 className="text-2xl font-bold leading-9 text-dark-gray">Customize your links</h2>
					<p className="text-body-m text-gray mt-2 mb-10">
						Add/edit/remove links below and then share all your profiles with the world!
					</p>
					<Button type="button" variant="secondary" className="w-full mb-6" onClick={handleAddLink}>
						+ Add new link
					</Button>
					{linksInState.length === 0 ? (
						<div className="flex flex-col justify-center items-center gap-6 bg-light-gray rounded-xl px-5 py-20 text-center">
							<Image src={Group} alt="a finger touching a cellphone" />
							<h3 className="text-2xl font-bold leading-9 text-dark-gray">Let’s get you started</h3>
							<p className="text-body-m text-gray max-w-[30rem]">
								Use the “Add new link” button to get started. Once you have more than one link, you
								can reorder and edit them. We’re here to help you share your profiles with everyone!
							</p>
						</div>
					) : (
						<DragDropContext onDragEnd={handleOnDragEnd}>
							<Droppable droppableId="links">
								{provided => (
									<div
										className="flex flex-col gap-6"
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										{linksInState.map((link, index) => (
											<Draggable key={link.id} draggableId={link.id} index={index}>
												{provided => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<EditLink index={index} link={link} form={form} />
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</DragDropContext>
					)}
				</section>
				<div className="border-t-[0.0625rem] p-4 flex justify-end sm:px-10 sm:py-6">
					<Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
						{isPending ? 'Saving...' : 'Save'}
					</Button>
				</div>
			</form>
		</Form>
	)
}
