import { Button } from '@/components/ui/button'
import Image from 'next/image'
import ellipse from '@/public/Ellipse 3.svg'
import PreviewLinkItem from '../preview-link-item'

export default function Preview() {
	return (
		<div className="flex flex-col items-center mx-auto gap-4 p-4 md:bg-purple md:h-[22.31rem] rounded-b-[2rem]">
			<div className="flex p-4 w-full gap-4 justify-center md:justify-between rounded-xl md:mb-20 md:bg-white">
				<Button variant="secondary">Back to Editor</Button>
				<Button>Share Link</Button>
			</div>
			<div className="flex flex-col justify-center items-center gap-4 md:bg-white md:rounded-3xl md:py-12 px-14 md:mt-10"></div>
		</div>
	)
}
