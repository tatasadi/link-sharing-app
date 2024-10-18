import Image from 'next/image'
import phoneMockup from '@/public/illustration-phone-mockup.svg'
import PreviewWrapper from './preview-wrapper'

export default function EditPreview() {
	return (
		<div className="p-10 lg:grid place-content-center *:row-start-1 *:col-start-1 bg-white rounded-xl ml-6 mb-6 hidden lg:col-span-2">
			<Image src={phoneMockup} alt="mobile mockup" />
			<div className="px-10 py-12">
				<PreviewWrapper showLinksPreview={true} />
			</div>
		</div>
	)
}
