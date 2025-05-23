'use client'
import { Button } from '../ui/button'
import iconEnvelop from '@/public/ph_envelope-simple-fill.svg'
import iconLock from '@/public/ph_lock-key-fill.svg'
import InputWithIcon from '../input-with-icon'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../ui/form'
import { login } from '@/actions/auth'
import { useFormState, useFormStatus } from 'react-dom'

const formSchema = z.object({
	email: z.string().min(1, { message: 'Can’t be empty' }).email({ message: 'Invalid email' }),
	password: z.string().min(1, { message: 'Please check again' }),
})

export type LoginFormType = z.infer<typeof formSchema>

export default function Login({ className = '' }: { className?: string }) {
	const [state, formAction] = useFormState(login, null)
	const { pending } = useFormStatus()
	const error = state?.error

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		await formAction(values)
	}

	return (
		<section className={cn('w-full flex flex-col bg-white p-8 sm:p-10 rounded-xl', className)}>
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Login</h2>
			<p className="text-body-m text-gray mb-10">Add your details below to get back into the app</p>
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
						placeholder="Enter your password"
						name="password"
						label="Password"
						type="password"
						className="mb-6"
						error={form.formState.errors.password?.message}
						control={form.control}
					/>

					<Button type="submit" className="w-full mb-6" disabled={pending}>
						{pending ? 'Loading...' : 'Login'}
					</Button>

					{error && <p className="text-red text-sm text-center mb-6">{error}</p>}
				</form>
			</Form>
			<div className="sm:flex gap-2 items-center justify-center text-center text-body-m">
				<p className="text-gray">Don’t have an account?</p>
				<Link href="/register" className="text-purple">
					Create account
				</Link>
			</div>
		</section>
	)
}
