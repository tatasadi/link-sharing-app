import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import bcrypt from 'bcryptjs'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function saltAndHashPassword(password: any) {
	const saltRounds = 10 // Adjust the cost factor according to your security requirements
	const salt = bcrypt.genSaltSync(saltRounds) // Synchronously generate a salt
	const hash = bcrypt.hashSync(password, salt) // Synchronously hash the password
	return hash // Return the hash directly as a string
}
