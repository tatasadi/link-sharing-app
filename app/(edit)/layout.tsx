import Header from '@/components/header'
import EditPreview from '@/components/sections/edit-preview'
import { Button } from '@/components/ui/button'

export default function EditLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="min-h-screen grid lg:grid-cols-5 grid-rows-[auto_1fr]">
			<Header className="lg:col-span-5" />
			<EditPreview />
			<div className="grid grid-rows-[1fr_auto] bg-white rounded-xl m-4 sm:m-6 sm:mt-0 lg:col-span-3">
				{children}
				<div className="border-t-[0.0625rem] p-4 flex justify-end sm:px-10 sm:py-6">
					<Button className="w-full sm:w-auto">Save</Button>
				</div>
			</div>
		</main>
	)
}
