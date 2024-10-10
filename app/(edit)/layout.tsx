import Header from '@/components/header'

export default function EditLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="min-h-screen grid lg:grid-cols-5 grid-rows-[auto_1fr]">
			<Header className="lg:col-span-5" />
			<div className="bg-white rounded-xl ml-6 mb-6 hidden lg:block lg:col-span-2">
				Preview Section
			</div>
			<div className="bg-white rounded-xl m-4 sm:m-6 sm:mt-0 lg:col-span-3">
				{children}
				<div>Save Button</div>
			</div>
		</main>
	)
}
