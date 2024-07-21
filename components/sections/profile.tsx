import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Social from '../ui/social_button'
import Image from 'next/image'
import illustration from '@/public/illustration-phone-mockup.svg'
import ph_image from '@/public/ph_image.svg'

export default function Profile() {
	return (
		<div className="flex gap-8 justify-between items-center bg-white">
			<div className="hidden lg:block relative">
				<Image src={illustration} alt="icon" />
				<div className="flex flex-col gap-4 p-6 absolute top-[14.3rem] left-2">
					<Social
						color="#1A1A1A"
						text="GitHub"
						icon="/teenyicons_github-solid.svg"
					/>
					<Social
						color="#EE3939"
						text="YouTube"
						icon="/ri_youtube-fill.svg"
					/>
					<Social
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
						<Image src={ph_image} alt="icon" />
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
					<Input placeholder="e.g. email@example.com" type="email" />
				</div>
				<div className="w-full h-[.15rem] bg-dark-gray"></div>
				<Button className="w-full mb-8 md:w-[6rem] md:ml-auto">
					Save
				</Button>
			</section>
		</div>
	)
}
