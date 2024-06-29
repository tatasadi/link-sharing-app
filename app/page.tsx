import InputWithIcon from '@/components/ui/inputWithIcon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import Image from 'next/image'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

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
			<InputWithIcon />
			<Select>
				<SelectTrigger className="max-w-[30rem]">
					<SelectValue placeholder="Dropdown Field Default" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">Item 1</SelectItem>
					<SelectItem value="dark">Item 2</SelectItem>
					<SelectItem value="system">Item 3</SelectItem>
				</SelectContent>
			</Select>
		</main>
	)
}
