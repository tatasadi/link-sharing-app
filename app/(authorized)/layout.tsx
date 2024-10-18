import UpdateUserInStore from '@/components/update-user-in-store'

export default async function AutohrizedLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<UpdateUserInStore />
		</>
	)
}
