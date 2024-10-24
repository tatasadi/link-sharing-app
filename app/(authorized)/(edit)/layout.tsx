import Header from '@/components/header'
import EditPreview from '@/components/sections/edit-preview'

export default async function EditLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="min-h-screen grid lg:grid-cols-5 grid-rows-[auto_1fr]">
			<Header className="lg:col-span-5" />
			<EditPreview />
			{children}
		</main>
	)
}
