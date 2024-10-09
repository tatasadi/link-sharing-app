import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from './prisma/db'
import bcrypt from 'bcryptjs'
import { saltAndHashPassword } from './lib/utils'

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(db),
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async credentials => {
				if (!credentials?.email || !credentials?.password) {
					return null
				}

				const email = credentials.email as string

				const user = await db.user.findUnique({
					where: { email },
				})

				if (!user) {
					return null
				}

				const isPasswordValid = await bcrypt.compare(credentials.password as string, user.password)

				if (!isPasswordValid) {
					return null
				}

				return {
					id: user.id,
					email: user.email,
					name: user.name,
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.user = user
			return token
		},
		async session({ session, token }) {
			session.user = token.user
			return session
		},
	},
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	// pages: {
	// 	signIn: '/login',
	// },
})
