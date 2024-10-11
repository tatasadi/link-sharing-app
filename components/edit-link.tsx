import SocialDropdown from './social-dropdown'
import { Button } from './ui/button'
import iconLink from '@/public/icon-link.svg'
import InputWithIcon from './input-with-icon'
import { Link, useStore } from '@/app/useStore'

export default function EditLink({
	index,
	formControl,
	link,
}: {
	index: number
	formControl: any
	link: Link
}) {
	const { removeLink, updateLink } = useStore()

	function handleLinkInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		updateLink(link.id, link.platform, e.target.value)
	}

	function handleDropdownChange(platform: string) {
		updateLink(link.id, platform, link.url)
	}

	return (
		<div className="bg-light-gray p-5 rounded-xl flex flex-col gap-3">
			<div className="flex items-center gap-2">
				<div className="flex flex-col gap-1">
					<div className="w-[0.75rem] h-[0.0625rem] bg-gray"></div>
					<div className="w-[0.75rem] h-[0.0625rem] bg-gray"></div>
				</div>
				<p className="font-bold text-gray">Link #{index + 1}</p>
				<Button
					type="button"
					variant="ghost"
					className="ml-auto"
					onClick={() => removeLink(link.id)}
				>
					Remove
				</Button>
			</div>
			<label className="text-body-s text-dark-gray">
				<span className="mb-1 text-xs">Platform</span>
				<SocialDropdown
					control={formControl}
					name={`platform${index}`}
					handleChange={handleDropdownChange}
				/>
			</label>
			<InputWithIcon
				icon={iconLink}
				placeholder="e.g. https://www.github.com/johnappleseed"
				name={`link${index}`}
				label="Link"
				type="text"
				control={formControl}
				value={link.url}
				onChange={handleLinkInputChange}
			/>
		</div>
	)
}
