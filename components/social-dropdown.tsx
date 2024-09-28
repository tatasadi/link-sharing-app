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

export default function SocialDropdown() {
	return (
		<Select>
			<SelectTrigger className="mb-6">
				<SelectValue
					placeholder={
						<span className="flex gap-1">
							<Image src={iconLink} alt="icon link" className="mr-3" />
							Dropdown Field Default
						</span>
					}
					className="pr-4"
				/>
			</SelectTrigger>
			<SelectContent>
				{socials.map((social, index) => (
					<>
						{index !== 0 && <SelectSeparator />}
						<SelectItem key={social.name} value={social.name}>
							<span className="flex gap-3 items-center">
								{social.icon} {social.name}
							</span>
						</SelectItem>
					</>
				))}
			</SelectContent>
		</Select>
	)
}
