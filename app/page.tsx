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
		<main className="flex flex-col items-center mx-auto gap-4 p-4 md:bg-royal-violet md:h-[22.31rem] rounded-b-[2rem]">
			<div className="flex p-4 w-full gap-4 justify-center md:justify-between rounded-xl md:mb-20 md:bg-white">
				<Button variant="secondary">Back to Editor</Button>
				<Button>Share Link</Button>
			</div>
			<div className="flex flex-col justify-center items-center gap-4 md:bg-white md:rounded-3xl md:py-12 px-14 md:mt-10">
				<img src="/Ellipse 3.svg" />
				<h1 className="text-heading-m text-pure-gray">Ben Wright</h1>
				<p className="text-heading-s text-stone-gray">
					ben@example.com
				</p>
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
			</div>
			*/ profile /*
			<div className="flex gap-5 justify-center items-center">
				<div className="hidden lg:block">
					<img />
					<div className="flex flex-col gap-4 p-6">
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
					</div>
				</div>
				<section className="flex flex-col gap-4 p-6 bg-white rounded-xl">
					<div>
						<h2 className="text-2xl font-bold leading-9 text-pure-gray">
							Profile Details
						</h2>
						<p className="text-body-m text-stone-gray">
							Add your details to create a personal touch to your
							profile.
						</p>
					</div>
					<div className="bg-pure-snow rounded-xl p-5 mt-4 md:flex md:items-center md:gap-4">
						<h3 className="text-body-m text-stone-gray md:w-1/2">
							Profile picture
						</h3>
						<div className="bg-soft-lilac rounded-xl flex flex-col justify-center items-center w-[12rem] md:w-1/2 h-[12rem] my-8">
							<img src="/ph_image.svg" />
							<a
								href="#"
								aria-label="+ Upload Image"
								className="text-heading-s text-royal-violet"
							>
								+ Upload Image
							</a>
						</div>
						<p className="text-body-s text-stone-gray md:w-1/3">
							Image must be below 1024x1024px. Use PNG or JPG format.
						</p>
					</div>
					<div className="bg-pure-snow rounded-xl p-5 md:grid md:grid-cols-2 md:gap-4">
						<label className="item">First name*</label>
						<Input placeholder="e.g. John" />
						<label className="item">Last name*</label>
						<Input placeholder="e.g. Appleseed" />
						<label className="item">Email*</label>
						<Input
							placeholder="e.g. email@example.com"
							type="email"
						/>
					</div>
					<div className="w-full h-[.15rem] bg-dark-gray"></div>
					<Button className="w-full mb-8 md:w-[6rem] md:ml-auto">
						Save
					</Button>
				</section>
			</div>
		</main>
	)
}
