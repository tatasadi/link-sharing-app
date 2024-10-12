import { AiOutlineLinkedin } from 'react-icons/ai'
import { BiLogoDevTo } from 'react-icons/bi'
import {
	FaTwitter,
	FaYoutube,
	FaFacebook,
	FaTwitch,
	FaFreeCodeCamp,
	FaGitlab,
	FaStackOverflow,
} from 'react-icons/fa'
import { PiGithubLogoFill } from 'react-icons/pi'
import { SiFrontendmentor, SiCodewars, SiHashnode } from 'react-icons/si'
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

const socials = [
	{
		name: 'GitHub',
		icon: <PiGithubLogoFill />,
	},
	{
		name: 'Frontend Mentor',
		icon: <SiFrontendmentor />,
	},
	{
		name: 'Twitter',
		icon: <FaTwitter />,
	},
	{
		name: 'LinkedIn',
		icon: <AiOutlineLinkedin />,
	},
	{
		name: 'YouTube',
		icon: <FaYoutube />,
	},
	{
		name: 'Facebook',
		icon: <FaFacebook />,
	},
	{
		name: 'Twitch',
		icon: <FaTwitch />,
	},
	{
		name: 'Dev.to',
		icon: <BiLogoDevTo />,
	},
	{
		name: 'Codewars',
		icon: <SiCodewars />,
	},
	{
		name: 'freeCodeCamp',
		icon: <FaFreeCodeCamp />,
	},
	{
		name: 'GitLab',
		icon: <FaGitlab />,
	},
	{
		name: 'Hashnode',
		icon: <SiHashnode />,
	},
	{
		name: 'Stack Overflow',
		icon: <FaStackOverflow />,
	},
]

export default function SocialDropdown({
	control,
	name,
	onChange,
}: {
	control: any
	name: string
	onChange: any
}) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<FormItem>
					<FormLabel>Platform</FormLabel>
					<Select
						{...field}
						onValueChange={e => {
							onChange()
							field.onChange(e)
						}}
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
							{socials.map((social, index) => (
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
