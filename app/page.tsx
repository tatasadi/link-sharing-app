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
import Card from '@/components/ui/Card'

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center mx-auto min-h-screen gap-4 py-4">
			<div className="flex gap-4">
				<Button variant="secondary">Back to Editor</Button>
				<Button>Share Link</Button>
			</div>
			<img src="/Ellipse 3.svg" />
			<h1 className="text-heading-m text-[#333]">Ben Wright</h1>
			<p className="text-heading-s text-[#737373]">ben@example.com</p>
			<Card
				color="#1A1A1A"
				text="GitHub"
				icon="/teenyicons_github-solid.svg"
			/>
			<Card
				color="#EE3939"
				text="YouTube"
				icon="/ri_youtube-fill.svg"
			/>
			<Card
				color="#2D68FF"
				text="LinkedIn"
				icon="/mdi_linkedin.svg"
			/>
			<Card
				color="#333333"
				text="Dev.to"
				icon="/skill-icons_devto-dark.svg"
			/>
			<Card
				color="#8A1A50"
				text="Codewars"
				icon="/cib_codewars.svg"
			/>
			<Card
				color="#302267"
				text="freeCodeCamp"
				icon="/ri_codepen-line.svg"
			/>
		</main>
	)
}
