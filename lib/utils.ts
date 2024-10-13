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

export function isValidUrl(url: string): boolean {
	try {
		new URL(url) // If this works, the URL is valid
		return true
	} catch (error) {
		return false // If it throws, the URL is invalid
	}
}
