'use client'

import { Button } from '../ui/button'
import iconEnvelop from '@/public/ph_envelope-simple-fill.svg'
import iconLock from '@/public/ph_lock-key-fill.svg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import InputWithIcon from '../input-with-icon'
import { Form, FormField, FormItem } from '../ui/form'
import Link from 'next/link'

const formSchema = z
	.object({
		email: z.string().min(1, { message: 'Can’t be empty' }).email({ message: 'Invalid email' }),
		password: z.string().min(1, { message: 'Please check again' }).min(8, {
			message: 'Password is too short',
		}),
		confirmPassword: z.string().min(1, { message: 'Please check again' }).min(8, {
			message: 'Password is too short',
		}),
	})
	.refine(
		values => {
			return values.password === values.confirmPassword
		},
		{
			message: 'Passwords must match!',
			path: ['confirmPassword'],
		},
	)

export default function Register({ className = '' }: { className?: string }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<section className={cn('w-full flex flex-col bg-white p-8 sm:p-10 rounded-xl', className)}>
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Create account</h2>
			<p className="text-body-m text-gray mb-10">Let’s get you started sharing your links!</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<InputWithIcon
									icon={iconEnvelop}
									placeholder="e.g. alex@email.com"
									id="email"
									label="Email address"
									type="email"
									className="mb-6"
									error={form.formState.errors.email?.message}
									{...field}
								/>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<InputWithIcon
									icon={iconLock}
									placeholder="At least 8 characters"
									id="password"
									label="Create password"
									type="password"
									className="mb-6"
									error={form.formState.errors.password?.message}
									{...field}
								/>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<InputWithIcon
									icon={iconLock}
									placeholder="At least 8 characters"
									id="confirmPassword"
									label="Confirm password"
									type="password"
									className="mb-6"
									error={form.formState.errors.confirmPassword?.message}
									{...field}
								/>
							</FormItem>
						)}
					/>
					<p className="text-body-s text-gray mb-6">Password must contain at least 8 characters</p>
					<Button type="submit" className="w-full mb-6">
						Create new account
					</Button>
				</form>
			</Form>
			<div className="sm:flex gap-2 items-center justify-center text-center text-body-m">
				<p className="text-gray">Already have an account?</p>
				<Link href="/login" className="text-purple">
					Login
				</Link>
			</div>
		</section>
	)
}
