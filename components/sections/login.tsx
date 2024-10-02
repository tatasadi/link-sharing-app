'use client'
import { Button } from '../ui/button'

import iconEnvelop from '@/public/ph_envelope-simple-fill.svg'
import iconLock from '@/public/ph_lock-key-fill.svg'
import InputWithIcon from '../input-with-icon'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Login({ className = '' }: { className?: string }) {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('formDate', e.target)
	}
	return (
		<section className={cn('w-full flex flex-col bg-white p-8 sm:p-10 rounded-xl', className)}>
			<h2 className="text-2xl font-bold leading-9 text-dark-gray">Login</h2>
			<p className="text-body-m text-gray mb-10">Add your details below to get back into the app</p>
			<form onSubmit={handleSubmit}>
				<InputWithIcon
					icon={iconEnvelop}
					placeholder="e.g. alex@email.com"
					id="email"
					label="Email address"
					type="email"
					className="mb-6"
				/>

				<InputWithIcon
					icon={iconLock}
					placeholder="Enter your password"
					id="password"
					label="Password"
					type="password"
					className="mb-6"
				/>

				<Button className="w-full mb-6">Login</Button>
			</form>
			<div className="sm:flex gap-2 items-center justify-center text-center text-body-m">
				<p className="text-gray">Don’t have an account?</p>
				<Link href="/register" className="text-purple">
					Create account
				</Link>
			</div>
		</section>
	)
}
