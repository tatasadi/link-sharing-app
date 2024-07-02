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
							<img src="/ph_image.svg" alt="icon" />
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
			*/ Login /*
			<section className="bg-white p-8 rounded-xl">
				<div className="flex gap-4 items-center mb-24 md:justify-center">
					<img src="/solar_link-circle-bold.svg" alt="icon" />
					<img src="/devlinks.svg" alt="logo" />
				</div>
				<div className="mb-8">
					<h4 className="text-2xl font-bold leading-9 text-pure-gray">
						Login
					</h4>
					<p className="text-body-m text-stone-gray">
						Add your details below to get back into the app
					</p>
				</div>
				<div className="mb-4">
					<label className="text-body-s text-pure-gray">
						Email address
					</label>
					<div className="flex relative mb-4">
						<Input
							type="email"
							placeholder="e.g. alex@email.com"
							className="px-9 py-3 opacity-50"
						/>
						<img
							src="/ph_envelope-simple-fill.svg"
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
					<label className="text-body-s text-pure-gray">
						Password
					</label>
					<div className="flex relative">
						<Input
							type="password"
							placeholder="Enter your password"
							className="px-9 py-3 opacity-50"
						/>
						<img
							src="/ph_lock-key-fill.svg"
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
				</div>
				<Button className="w-full mt-4">Login</Button>
				<div className="md:flex gap-2 mt-8 items-center justify-center">
					<p className="text-center text-stone-gray text-body-m">
						Don’t have an account?
					</p>
					<p className="text-center text-royal-violet text-body-m">
						Create account
					</p>
				</div>
			</section>
			*/ Create Account /*
			<section className="bg-white p-8 rounded-xl">
				<div className="flex gap-4 items-center mb-24 md:justify-center">
					<img src="/solar_link-circle-bold.svg" alt="icon" />
					<img src="/devlinks.svg" alt="logo" />
				</div>
				<div className="mb-8">
					<h4 className="text-2xl font-bold leading-9 text-pure-gray">
						Create account
					</h4>
					<p className="text-body-m text-stone-gray">
						Let’s get you started sharing your links!
					</p>
				</div>
				<div className="mb-4">
					<label className="text-body-s text-pure-gray">
						Email address
					</label>
					<div className="flex relative mb-4">
						<Input
							type="email"
							placeholder="e.g. alex@email.com"
							className="px-9 py-3 opacity-50"
						/>
						<img
							src="/ph_envelope-simple-fill.svg"
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
					<label className="text-body-s text-pure-gray">
						Create password
					</label>
					<div className="flex relative mb-4">
						<Input
							type="password"
							placeholder="At least .8 characters"
							className="px-9 py-3 opacity-50"
						/>
						<img
							src="/ph_lock-key-fill.svg"
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
					<label className="text-body-s text-pure-gray">
						Confirm password
					</label>
					<div className="flex relative">
						<Input
							type="password"
							placeholder="At least .8 characters"
							className="px-9 py-3 opacity-50"
						/>
						<img
							src="/ph_lock-key-fill.svg"
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
				</div>
				<p className="text-body-s text-stone-gray">
					Password must contain at least 8 characters
				</p>
				<Button className="w-full mt-4">Create new account</Button>
				<div className="md:flex gap-2 mt-8 items-center justify-center">
					<p className="text-center text-stone-gray text-body-m">
						Already have an account?
					</p>
					<p className="text-center text-royal-violet text-body-m">
						Login
					</p>
				</div>
			</section>
			*/ Empty /*
			<section className="bg-white p-8 rounded-xl">
				<div className="mb-28">
					<h5 className="text-2xl font-bold leading-9 text-pure-gray">
						Customize your links
					</h5>
					<p className="text-body-m text-stone-gray my-6">
						Add/edit/remove links below and then share all your
						profiles with the world!
					</p>
					<Button variant="secondary" className="w-full mt-2">
						+ Add new link
					</Button>
				</div>
				<div className="flex flex-col justify-center items-center gap-6">
					<img src="/Group 273.svg" />
					<h6 className="text-2xl font-bold leading-9 text-pure-gray">
						Let’s get you started
					</h6>
					<p className="text-body-m text-stone-gray mb-20 md:px-20">
						Use the “Add new link” button to get started. Once you
						have more than one link, you can reorder and edit them.
						We’re here to help you share your profiles with everyone!
					</p>
				</div>
				<div className="w-full h-[.15rem] bg-dark-gray"></div>
				<Button className="mt-4 opacity-25 w-full md:w-[6rem] md:ml-auto">
					Save
				</Button>
			</section>
			*/ Added One Link /*
			<section className="bg-white p-8 rounded-xl">
				<div className="mb-28">
					<h5 className="text-2xl font-bold leading-9 text-pure-gray">
						Customize your links
					</h5>
					<p className="text-body-m text-stone-gray my-6">
						Add/edit/remove links below and then share all your
						profiles with the world!
					</p>
					<Button variant="secondary" className="w-full mt-2 ">
						+ Add new link
					</Button>
				</div>
				<div>
					<div className="flex justify-between items-center mb-8">
						<p>Link #1</p>
						<p>Remove</p>
					</div>
					<Select>
						<SelectTrigger className="mb-6">
							<SelectValue placeholder="Dropdown Field Default" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">
								<img
									src="/teenyicons_github-solid.svg"
									className="bg-stone-gray"
								/>
								GitHub
							</SelectItem>
							<SelectItem value="dark">Item 2</SelectItem>
							<SelectItem value="system">Item 3</SelectItem>
						</SelectContent>
					</Select>
					<label className="text-body-s text-pure-gray">
						Email address
					</label>
					<div className="flex relative mb-4">
						<Input
							type="email"
							placeholder="e.g. https://www.github.com/johnappleseed"
							className="px-9 py-3 opacity-50"
						/>
						<img
							src="/ph_link-bold.svg"
							className="absolute top-3 left-2"
							alt="icon"
						/>
					</div>
				</div>
				<div className="w-full h-[.15rem] bg-dark-gray md:mt-28"></div>
				<Button className="mt-4 w-full md:w-[6rem] md:ml-auto">
					Save
				</Button>
			</section>
		</main>
	)
}
