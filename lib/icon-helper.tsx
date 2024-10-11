import { Link } from '@/app/useStore'
import IconGithub from '@/components/icons/icon-github'
import IconFrontendmentor from '@/components/icons/icon-frontendmentor'
import { FaTwitter } from 'react-icons/fa'

export function updateIconForLinkObject(link: Link) {
	switch (link.platform) {
		case 'GitHub':
			return { ...link, icon: <IconGithub />, className: 'bg-github' }
		case 'Frontend Mentor':
			return {
				...link,
				icon: <IconFrontendmentor />,
				className: 'bg-white text-dark-gray hover:text-dark-gray border border-borders',
			}
		case 'Twitter':
			return { ...link, icon: <FaTwitter />, className: 'bg-twitter' }
		default:
			return link
	}
}
