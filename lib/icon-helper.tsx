import { Link } from '@/app/useStore'
import IconGithub from '@/components/icons/icon-github'
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

export default function getSocialIcons() {
	return [
		{
			name: 'GitHub',
			icon: <IconGithub />,
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
}

export function updateIconForLinkObject(link: Link) {
	switch (link.platform) {
		case 'GitHub':
			return { ...link, icon: <PiGithubLogoFill />, className: 'bg-github' }
		case 'Frontend Mentor':
			return {
				...link,
				icon: <SiFrontendmentor />,
				className: 'bg-white text-dark-gray hover:text-dark-gray border border-borders',
			}
		case 'Twitter':
			return { ...link, icon: <FaTwitter />, className: 'bg-twitter' }
		case 'LinkedIn':
			return { ...link, icon: <AiOutlineLinkedin />, className: 'bg-linkedin' }
		case 'YouTube':
			return { ...link, icon: <FaYoutube />, className: 'bg-youtube' }
		case 'Facebook':
			return { ...link, icon: <FaFacebook />, className: 'bg-facebook' }
		case 'Twitch':
			return { ...link, icon: <FaTwitch />, className: 'bg-twitch' }
		case 'Dev.to':
			return { ...link, icon: <BiLogoDevTo />, className: 'bg-dark-gray' }
		case 'Codewars':
			return { ...link, icon: <SiCodewars />, className: 'bg-codewars' }
		case 'freeCodeCamp':
			return { ...link, icon: <FaFreeCodeCamp />, className: 'bg-freecodecamp' }
		case 'GitLab':
			return { ...link, icon: <FaGitlab />, className: 'bg-gitlab' }
		case 'Hashnode':
			return { ...link, icon: <SiHashnode />, className: 'bg-hashnode' }
		case 'Stack Overflow':
			return { ...link, icon: <FaStackOverflow />, className: 'bg-stackoverflow' }
		default:
			return link // If no matching platform is found, return the original link
	}
}
