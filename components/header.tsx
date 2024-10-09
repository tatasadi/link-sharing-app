import ButtonWithIcon from './button-with-icon'
import Logo from './logo'
import IconLink from './icons/icon-link'
import { Button } from './ui/button'
import IconProfile from './icons/icon-profile'
import IconEye from './icons/icon-eye'

export default function Header() {
	return (
		<header className="flex bg-white p-4 pl-6 sm:rounded-xl sm:m-6">
			<Logo />
			<ButtonWithIcon icon={<IconLink />} isActive={true} className="ml-auto">
				Links
			</ButtonWithIcon>
			<ButtonWithIcon icon={<IconProfile />} isActive={false} className="mr-auto">
				Profile Details
			</ButtonWithIcon>
			<Button variant="secondary">
				<span className="sm:hidden">
					<IconEye />
				</span>
				<span className="hidden sm:block">Preview</span>
			</Button>
		</header>
	)
}
