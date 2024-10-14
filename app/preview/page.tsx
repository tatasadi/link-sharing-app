import Preview from '@/components/preview'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PreviewPage() {
	return (
		<div className="flex flex-col items-center mx-auto gap-[3.75rem] p-4 sm:bg-purple sm:h-[22.31rem] rounded-b-[2rem]">
			<header className="flex p-4 w-full gap-4 justify-center sm:justify-between rounded-xl sm:mb-20 sm:bg-white">
				<Link href="/links">
					<Button variant="secondary">Back to Editor</Button>
				</Link>
				<Button>Share Link</Button>
			</header>
			<main className="flex flex-col justify-center items-center gap-4 sm:bg-white sm:rounded-3xl sm:py-12 px-14 sm:mt-10 sm:shadow-[0px_0px_32px_0px_rgba(0,0,0,0.10)]">
				<Preview size="lg" />
			</main>
		</div>
	)
}
