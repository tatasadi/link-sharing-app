'use client'
import Preview from '@/components/preview'
import Image from 'next/image'
import phoneMockup from '@/public/illustration-phone-mockup.svg'
import { useStore } from '@/app/useStore'

export default function EditPreview() {
	const { links, profile, profileImage } = useStore()
	return (
		<div className="p-10 lg:grid place-content-center *:row-start-1 *:col-start-1 bg-white rounded-xl ml-6 mb-6 hidden lg:col-span-2">
			<Image src={phoneMockup} alt="mobile mockup" />
			<div className="px-10 py-12">
				<Preview
					showLinksPreview={true}
					links={links}
					profile={profile}
					profileImage={profileImage}
				/>
			</div>
		</div>
	)
}
