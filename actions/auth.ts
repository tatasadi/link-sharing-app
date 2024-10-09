'use server'

import { signIn } from '@/auth'
import { LoginFormType } from '@/components/sections/login'
import { RegisterFormType } from '@/components/sections/register'
import { saltAndHashPassword } from '@/lib/utils'
import { db } from '@/prisma/db'
import { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'

export const register = async (data: RegisterFormType) => {
	const email = data.email
	const password = data.password

	// Check if the user already exists
	const existingUser = await db.user.findUnique({
		where: { email },
	})

	if (existingUser) {
		return { success: false, error: 'User already exists' }
	}

	const hashedPassword = saltAndHashPassword(password)
	console.log('hashedPassword', hashedPassword)

	const user = await db.user.create({
		data: {
			name: email,
			email,
			password: hashedPassword,
		},
	})
	return { success: true, user }
}

export const login = async (data: LoginFormType) => {
	try {
		await signIn('credentials', { ...data, redirectTo: '/' })
	} catch (error: any) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { success: false, error: 'Invalid credentials!' }
				default:
					return { success: false, error: 'Something went wrong!' }
			}
		}

		throw error
	}
	revalidatePath('/')
}
