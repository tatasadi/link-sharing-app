'use client'

import { Button } from '../ui/button'
import iconEnvelop from '@/public/ph_envelope-simple-fill.svg'
import iconLock from '@/public/ph_lock-key-fill.svg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import InputWithIcon from '../input-with-icon'
import { Form } from '../ui/form'
import Link from 'next/link'
import { register } from '@/actions/auth'
import { useFormState, useFormStatus } from 'react-dom'

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

export type RegisterFormType = z.infer<typeof formSchema>

export default function Register({ className = '' }: { className?: string }) {
	const [state, formAction] = useFormState(register, null)
	const { pending } = useFormStatus()
	const error = state?.error

	const form = useForm<RegisterFormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		await formAction(values)
	}

	return (
		<section className={cn('w-full flex flex-col bg-white p-8 sm:p-10 rounded-xl', className)}>
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Create account</h2>
			<p className="text-body-m text-gray mb-10">Let’s get you started sharing your links!</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<InputWithIcon
						icon={iconEnvelop}
						placeholder="e.g. alex@email.com"
						name="email"
						label="Email address"
						type="email"
						className="mb-6"
						error={form.formState.errors.email?.message}
						control={form.control}
					/>
					<InputWithIcon
						icon={iconLock}
						placeholder="At least 8 characters"
						name="password"
						label="Create password"
						type="password"
						className="mb-6"
						error={form.formState.errors.password?.message}
						control={form.control}
					/>
					<InputWithIcon
						icon={iconLock}
						placeholder="At least 8 characters"
						name="confirmPassword"
						label="Confirm password"
						type="password"
						className="mb-6"
						error={form.formState.errors.confirmPassword?.message}
						control={form.control}
					/>
					<p className="text-body-s text-gray mb-6">Password must contain at least 8 characters</p>
					<Button type="submit" className="w-full mb-6" disabled={pending}>
						{pending ? 'Loading...' : 'Create new account'}
					</Button>
					{error && <p className="text-red text-sm text-center mb-6">{error}</p>}
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
