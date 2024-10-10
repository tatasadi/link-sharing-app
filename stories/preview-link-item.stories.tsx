import PreviewLinkItem from '@/components/preview-link-item'
import type { Meta, StoryObj } from '@storybook/react'
import IconGithub from '@/components/icons/icon-github'
import IconFrontendmentor from '@/components/icons/icon-frontendmentor'
import { FaTwitter } from 'react-icons/fa'

const meta = {
	title: 'Components/PreviewLinkItem',
	component: PreviewLinkItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PreviewLinkItem>

export default meta
type Story = StoryObj<typeof meta>

export const Github: Story = {
	args: {
		children: 'GitHub',
		icon: <IconGithub />,
		className: 'bg-github',
	},
}

export const Frontendmentor: Story = {
	args: {
		children: 'Frontendmentor',
		icon: <IconFrontendmentor />,
		className: 'bg-white text-dark-gray hover:text-dark-gray border border-borders',
	},
}

export const Twitter: Story = {
	args: {
		children: 'Twitter',
		icon: <FaTwitter />,
		className: 'bg-twitter',
	},
}
