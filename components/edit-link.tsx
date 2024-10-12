import SocialDropdown from './social-dropdown'
import { Button } from './ui/button'
import iconLink from '@/public/icon-link.svg'
import InputWithIcon from './input-with-icon'
import { Link, useStore } from '@/app/useStore'

export default function EditLink({ index, link, form }: { index: number; link: Link; form: any }) {
	const { removeLink } = useStore()

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
				<SocialDropdown control={form.control} name={`links.${index}.platform`} />
			</label>
			<InputWithIcon
				icon={iconLink}
				placeholder="e.g. https://www.github.com/johnappleseed"
				name={`links.${index}.url`}
				label="Link"
				type="text"
				control={form.control}
				error={form.formState.errors.url?.message}
			/>
		</div>
	)
}
