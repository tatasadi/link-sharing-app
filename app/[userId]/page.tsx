import { fetchUserData } from '@/actions/data'
import Preview from '@/components/preview'
import { updateIconForLinkObject } from '@/lib/icon-helper'

export default async function Page({ params }: { params: { userId: string } }) {
	const result = await fetchUserData(params.userId)
	if (!result.success) {
		return <div>{result.error}</div>
	}
	const { profile, links = [] } = result

	const linksWithIcon = links.map(link => updateIconForLinkObject(link))

	return (
		<div className="flex flex-col items-center mx-auto gap-[3.75rem] p-4 sm:bg-purple sm:h-[22.31rem] rounded-b-[2rem]">
			<main className="flex flex-col justify-center items-center gap-4 sm:bg-white sm:rounded-3xl sm:py-12 px-14 sm:mt-36 sm:shadow-[0px_0px_32px_0px_rgba(0,0,0,0.10)]">
				<Preview size="lg" links={linksWithIcon} profile={profile} />
			</main>
		</div>
	)
}
