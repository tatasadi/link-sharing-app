'use client'
import { Input } from '../ui/input'
import Upload from '../ui/upload'
import { Label } from '../ui/label'
import InputWithIcon from '../input-with-icon'
import { Form } from '../ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	firstName: z.string().min(1, 'Can’t be empty'),
	lastName: z.string().min(1, 'Can’t be empty'),
	email: z.string().email('Must be a valid email address'),
})

export default function CustomizeProfile() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		mode: 'onBlur',
	})

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		console.log(data)
	}

	return (
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
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="bg-light-gray rounded-xl p-5 grid sm:grid-cols-3 gap-x-4 sm:gap-y-3 sm:items-center mt-6"
				>
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
						Email*
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
				</form>
			</Form>
		</section>
	)
}
