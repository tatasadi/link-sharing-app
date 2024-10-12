import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	SelectSeparator,
} from './ui/select'
import iconLink from '@/public/icon-link.svg'
import Image from 'next/image'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form'
import getSocialIcons from '@/lib/icon-helper'
import { on } from 'events'

export default function SocialDropdown({
	form,
	name,
	onChange,
}: {
	form: any
	name: string
	onChange: () => void
}) {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field, fieldState }) => (
				<FormItem>
					<FormLabel>Platform</FormLabel>
					<Select
						onValueChange={e => {
							field.onChange(e)
							onChange()
						}}
						defaultValue={field.value}
					>
						<FormControl>
							<SelectTrigger className="mb-6">
								<SelectValue
									placeholder={
										<span className="flex gap-1">
											<Image src={iconLink} alt="icon link" className="mr-3" />
											--- Select a platform ---
										</span>
									}
									className="pr-4"
								/>
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{getSocialIcons().map((social, index) => (
								<span key={social.name}>
									{index !== 0 && <SelectSeparator />}
									<SelectItem value={social.name}>
										<span className="flex gap-3 items-center">
											{social.icon} {social.name}
										</span>
									</SelectItem>
								</span>
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
