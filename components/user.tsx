'use client'
import { useSession } from 'next-auth/react'

export default function User() {
	const { data: session } = useSession()
	return (
		<div>
			<h1>User Session</h1>
			<pre>{JSON.stringify(session)}</pre>
		</div>
	)
}
