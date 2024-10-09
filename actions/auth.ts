'use server'

import { signIn } from '@/auth'
import { RegisterFormType } from '@/components/sections/register'
import { saltAndHashPassword } from '@/lib/utils'
import { db } from '@/prisma/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const register = async (data: RegisterFormType) => {
	const email = data.email
	const password = data.password

	const existingUser = await db.user.findUnique({
		where: { email },
	})

	if (existingUser) {
		return { success: false, error: 'User already exists' }
	}

	const hashedPassword = saltAndHashPassword(password)

	const user = await db.user.create({
		data: {
			name: email,
			email,
			password: hashedPassword,
		},
	})
	return { success: true, user }
}

export const login = async (state: any, data: FormData) => {
	try {
		const email = data.get('email') as string
		const password = data.get('password') as string
		await signIn('credentials', { email, password, redirect: false })
	} catch (error: any) {
		switch (error.type) {
			case 'CredentialsSignin':
				return { success: false, error: 'Invalid credentials!' }
			default:
				return { success: false, error: 'Something went wrong!' }
		}
	}
	redirect('/')
	revalidatePath('/')
}
