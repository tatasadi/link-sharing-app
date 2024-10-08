'use server'

import { signIn } from '@/auth'
import { LoginFormType } from '@/components/sections/login'
import { RegisterFormType } from '@/components/sections/register'
import { saltAndHashPassword } from '@/lib/utils'
import { db } from '@/prisma/db'
import { redirect } from 'next/navigation'

export const register = async (state: any, data: RegisterFormType) => {
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
	try {
		await signIn('credentials', { email, password, redirect: false })
	} catch (error: any) {
		return { success: false, error: 'Something went wrong!' }
	}
	redirect('/')
}

export const login = async (state: any, data: LoginFormType) => {
	try {
		await signIn('credentials', { ...data, redirect: false })
	} catch (error: any) {
		switch (error.type) {
			case 'CredentialsSignin':
				return { success: false, error: 'Invalid credentials!' }
			default:
				return { success: false, error: 'Something went wrong!' }
		}
	}
	redirect('/')
}
