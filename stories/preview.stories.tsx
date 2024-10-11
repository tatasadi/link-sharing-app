import type { Meta, StoryObj } from '@storybook/react'
import Preview from '@/components/preview'
import image from '@/public/Ellipse 3.svg'
import IconGithub from '@/components/icons/icon-github'
import IconFrontendmentor from '@/components/icons/icon-frontendmentor'

const links = [
	{
		icon: <IconGithub />,
		text: 'GitHub',
		className: 'bg-github',
	},
	{
		icon: <IconFrontendmentor />,
		text: 'Frontendmentor',
		className: 'bg-white text-dark-gray hover:text-dark-gray border border-borders',
	},
]

const meta = {
	title: 'Components/Preview',
	component: Preview,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Preview>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
	args: {},
}

export const EmptyWithLinksPreview: Story = {
	args: {
		showLinksPreview: true,
	},
}

export const FilledMd: Story = {
	args: {
		image,
		email: 'ben@example.com',
		name: 'Ben Wright',
		links,
	},
}

export const FilledLg: Story = {
	args: {
		image,
		email: 'ben@example.com',
		name: 'Ben Wright',
		links,
		size: 'lg',
	},
}

export const FilledWithLinksPreview: Story = {
	args: {
		image,
		email: 'ben@example.com',
		name: 'Ben Wright',
		links,
		showLinksPreview: true,
	},
}
