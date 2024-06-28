import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
			<h1 className="text-4xl font-bold text-center">
				Welcome to the Link Sharing App
			</h1>
			<Button>Get Started</Button>
			<Button className="bg-lavender-dream">Get Started</Button>
			<Button className="opacity-25">Get Started</Button>
			<Button variant="secondary">Get Started</Button>
			<Button variant="secondary" className="bg-soft-lilac">
				Get Started
			</Button>
			<Button variant="secondary" className="opacity-25">
				Get Started
			</Button>
			<div className="flex relative">
				<Input
					type="text"
					placeholder="Text Field Empty"
					className="px-9 py-3 opacity-50"
				/>
				<img
					src="/icon-arrow.svg"
					className="absolute top-3 left-2"
				/>
			</div>
			<div className="flex relative">
				<Input
					type="text"
					placeholder="Text Field Filled"
					className="cursor-pointer px-9 py-3 hover:border-royal-violet hover:box-shadow:0px 0px 32px 0px rgba(99, 60, 255, 0.25)"
				/>
				<img
					src="/icon-arrow.svg"
					className="absolute top-3 left-2"
				/>
			</div>
			<div className="flex relative">
				<Input
					type="text"
					placeholder="Text Field Error"
					className="cursor-pointer px-9 py-3"
				/>
				<img
					src="/icon-arrow.svg"
					className="absolute top-3 left-2"
				/>
			</div>
		</main>
	)
}
