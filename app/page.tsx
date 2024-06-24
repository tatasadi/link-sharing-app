import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-4xl font-bold text-center">Welcome to the Link Sharing App</h1>
			<Button>Get Started</Button>
			<Button variant="secondary">Get Started</Button>
			<Input type="text" placeholder="Enter your email" />
			<Button variant="destructive">Get Started</Button>
			<Button variant="outline">Get Started</Button>
			<Button variant="ghost">Get Started</Button>
			<Button variant="link">Get Started</Button>
		</main>
	)
}
