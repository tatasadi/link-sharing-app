'use client'
import Upload from '../upload'
import { Label } from '../ui/label'
import InputWithIcon from '../input-with-icon'
import { Form } from '../ui/form'
import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from '@/app/useStore'
import { useEffect, useRef, useState } from 'react'
import { profileSchema } from '@/lib/schema'
import { SaveProfile } from '@/actions/data'
import { Button } from '../ui/button'
import { MdError } from 'react-icons/md'
import { PiFloppyDiskBackFill } from 'react-icons/pi'
import { useToast } from '@/hooks/use-toast'

export default function CustomizeProfile() {
	const { toast } = useToast()
	const { profile, updateProfile } = useStore()
	const [isPending, setIsPending] = useState(false)
	const form = useForm<z.infer<typeof profileSchema>>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			firstName: profile.firstName ?? '',
			lastName: profile.lastName ?? '',
			email: profile.email ?? '',
		},
		mode: 'onBlur',
	})

	const profileInState = useWatch({ control: form.control })
	const prevProfileRef = useRef(profile)

	useEffect(() => {
		if (JSON.stringify(prevProfileRef.current) !== JSON.stringify(profile)) {
			form.setValue('firstName', profile.firstName ?? '')
			form.setValue('lastName', profile.lastName ?? '')
			form.setValue('email', profile.email)
			prevProfileRef.current = profile
		}
	}, [profile, form])

	useEffect(() => {
		if (JSON.stringify(prevProfileRef.current) !== JSON.stringify(profileInState)) {
			updateProfile(profileInState)
			prevProfileRef.current = profileInState
		}
	}, [form, profileInState, updateProfile])

	const onSubmit = async (data: z.infer<typeof profileSchema>) => {
		setIsPending(true)
		const { success, error } = await SaveProfile({
			profile,
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

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-rows-[1fr_auto] bg-white rounded-xl m-4 sm:m-6 sm:mt-0 lg:col-span-3"
			>
				<section className="flex flex-col p-6 sm:p-10 bg-white rounded-xl">
					<div className="mb-10">
						<h2 className="text-2xl font-bold leading-9 text-dark-gray mb-2">Profile Details</h2>
						<p className="text-body-m text-gray">
							Add your details to create a personal touch to your profile.
						</p>
					</div>
					<div className="bg-light-gray rounded-xl p-5 grid sm:grid-cols-3 items-center gap-4">
						<h3 className="text-gray">Profile picture</h3>
						<Upload className="sm:col-span-2" />
					</div>
					<div className="bg-light-gray rounded-xl p-5 grid sm:grid-cols-3 gap-x-4 sm:gap-y-3 sm:items-center mt-6">
						<Label className="profile-label" htmlFor="firstName">
							First name*
						</Label>
						<InputWithIcon
							placeholder="e.g. John"
							name="firstName"
							id="firstName"
							type="text"
							className="sm:col-span-2 mb-3 sm:mb-0"
							error={form.formState.errors.firstName?.message}
							control={form.control}
						/>
						<Label className="profile-label" htmlFor="lastName">
							Last name*
						</Label>
						<InputWithIcon
							placeholder="e.g. Appleseed"
							name="lastName"
							id="lastName"
							type="text"
							className="sm:col-span-2 mb-3 sm:mb-0"
							error={form.formState.errors.lastName?.message}
							control={form.control}
						/>
						<Label className="profile-label" htmlFor="email">
							Email
						</Label>
						<InputWithIcon
							placeholder="e.g. email@example.com"
							name="email"
							id="email"
							type="email"
							className="sm:col-span-2"
							error={form.formState.errors.email?.message}
							control={form.control}
						/>
					</div>
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
