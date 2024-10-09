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
import { Form, FormField, FormItem } from '../ui/form'
import { useRouter } from 'next/navigation'
import { signIn } from '@/auth'
import { login } from '@/actions/auth'

const formSchema = z.object({
	email: z.string().min(1, { message: 'Can’t be empty' }).email({ message: 'Invalid email' }),
	password: z.string().min(1, { message: 'Please check again' }).min(8, {
		message: 'Password is too short',
	}),
})

export type LoginFormType = z.infer<typeof formSchema>

export default function Login({ className = '' }: { className?: string }) {
	const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		signIn('credentials', { ...values, redirectTo: '/' })
		// const response = await login(values)
		// console.log('response', response)
		// const { success, error, user } = response
		// if (!success) {
		// 	form.setError('email', { message: error })
		// } else {
		// 	console.log('success', user)
		// 	router.push('/')
		// }
	}

	return (
		<section className={cn('w-full flex flex-col bg-white p-8 sm:p-10 rounded-xl', className)}>
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Login</h2>
			<p className="text-body-m text-gray mb-10">Add your details below to get back into the app</p>
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
									placeholder="Enter your password"
									id="password"
									label="Password"
									type="password"
									className="mb-6"
									error={form.formState.errors.password?.message}
									{...field}
								/>
							</FormItem>
						)}
					/>

					<Button type="submit" className="w-full mb-6">
						Login
					</Button>
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
