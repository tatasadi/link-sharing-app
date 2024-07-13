import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectSeparator,
} from '@/components/ui/select'
import { Input } from '../ui/input'
import { PiGithubLogoFill } from 'react-icons/pi'
import { SiFrontendmentor } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { BiLogoDevTo } from 'react-icons/bi'
import { SiCodewars } from 'react-icons/si'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa6'
import { SiHashnode } from 'react-icons/si'
import { FaStackOverflow } from 'react-icons/fa'

export default function Addlink() {
	return (
		<div>
			<div className="flex justify-between items-center mb-8">
				<p>Link #1</p>
				<p>Remove</p>
			</div>
			<label className="text-body-s text-pure-gray">Platform</label>
			<Select>
				<SelectTrigger className="mb-6">
					<SelectValue placeholder="Dropdown Field Default" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="github">
						<div className="select-item-wrapper">
							<PiGithubLogoFill /> Github
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="frontendmentor">
						<div className="select-item-wrapper">
							<SiFrontendmentor />
							Frontend Mentor
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="twitter">
						<div className="select-item-wrapper">
							<FaTwitter /> Twitter
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="linkedIn">
						<div className="select-item-wrapper">
							<AiOutlineLinkedin /> LinkedIn
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="youTube">
						<div className="select-item-wrapper">
							<FaYoutube /> YouTube
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="facebook">
						<div className="select-item-wrapper">
							<FaFacebook /> Facebook
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="twitch">
						<div className="select-item-wrapper">
							<FaTwitch /> Twitch
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="devto">
						<div className="select-item-wrapper">
							<BiLogoDevTo /> Dev.to
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="codewars">
						<div className="select-item-wrapper">
							<SiCodewars /> Codewars
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="freeCodeCamp">
						<div className="select-item-wrapper">
							<FaFreeCodeCamp /> freeCodeCamp
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="gitLab">
						<div className="select-item-wrapper">
							<FaGitlab /> GitLab
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="hashnode">
						<div className="select-item-wrapper">
							<SiHashnode /> Hashnode
						</div>
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="stackoverflow">
						<div className="select-item-wrapper">
							<FaStackOverflow /> Stack Overflow
						</div>
					</SelectItem>
					<SelectSeparator />
				</SelectContent>
			</Select>
			<label className="text-body-s text-pure-gray">Link</label>
			<div className="flex relative mb-4">
				<Input
					type="email"
					placeholder="e.g. https://www.github.com/johnappleseed"
					className="px-9 py-3 opacity-50"
				/>
				<img
					src="/ph_link-bold.svg"
					className="absolute top-3 left-2"
					alt="icon"
				/>
			</div>
		</div>
	)
}
