import { auth } from '@/auth'
import InputWithIcon from '@/components/input-with-icon'
import Login from '@/components/sections/login'
import { Button } from '@/components/ui/button'
import Upload from '@/components/ui/upload'
import { useSession } from 'next-auth/react'

export default async function Home() {
	const session = await auth()
	console.log(session)

	return (
		// <main className="flex flex-col items-center mx-auto gap-4 p-4 md:bg-purple md:h-[22.31rem] rounded-b-[2rem]">
		// 	<div className="flex p-4 w-full gap-4 justify-center md:justify-between rounded-xl md:mb-20 md:bg-white">
		// 		<Button variant="secondary">Back to Editor</Button>
		// 		<Button>Share Link</Button>
		// 	</div>
		// 	<div className="flex flex-col justify-center items-center gap-4 md:bg-white md:rounded-3xl md:py-12 px-14 md:mt-10">
		// 		<img src="/Ellipse 3.svg" />
		// 		<h1 className="text-heading-m text-dark-gray">Ben Wright</h1>
		// 		<p className="text-heading-s text-gray">ben@example.com</p>
		// 		<Social color="#1A1A1A" text="GitHub" icon="/teenyicons_github-solid.svg" />
		// 		<Social color="#EE3939" text="YouTube" icon="/ri_youtube-fill.svg" />
		// 		<Social color="#2D68FF" text="LinkedIn" icon="/mdi_linkedin.svg" />
		// 		<Social color="#333333" text="Dev.to" icon="/skill-icons_devto-dark.svg" />
		// 		<Social color="#8A1A50" text="Codewars" icon="/cib_codewars.svg" />
		// 		<Social color="#302267" text="freeCodeCamp" icon="/ri_codepen-line.svg" />
		// 	</div>
		// 	<InputWithIcon id="input" label="Name" value="Hi" error="error" />
		// </main>
		<main className="min-h-screen w-full">
			{/* <Upload /> */}
			Hello!
			{session?.user?.email}
		</main>
	)
}
