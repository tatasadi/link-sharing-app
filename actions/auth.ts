'use server'

import { RegisterFormType } from '@/components/sections/register'
import { db } from '@/prisma/db'
import bcrypt from 'bcryptjs'

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

	const hashedPassword = await bcrypt.hash(password, 10)

	const user = await db.user.create({
		data: {
			name: email,
			email,
			password: hashedPassword,
		},
	})
	return { success: true, user }
}
