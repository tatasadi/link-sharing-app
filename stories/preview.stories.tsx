import type { Meta, StoryObj } from '@storybook/react'
import Preview from '@/components/preview'
import IconGithub from '@/components/icons/icon-github'
import IconFrontendmentor from '@/components/icons/icon-frontendmentor'

const links = [
	{
		id: '1',
		platform: 'GitHub',
		url: 'https://github.com',
		icon: <IconGithub />,
		text: 'GitHub',
		className: 'bg-github',
		order: 0,
	},
	{
		id: '2',
		platform: 'Frontendmentor',
		url: 'https://www.frontendmentor.io',
		icon: <IconFrontendmentor />,
		text: 'Frontendmentor',
		className: 'bg-white text-dark-gray hover:text-dark-gray border border-borders',
		order: 1,
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
		links,
	},
}

export const FilledLg: Story = {
	args: {
		links,
		size: 'lg',
	},
}

export const FilledWithLinksPreview: Story = {
	args: {
		links,
		showLinksPreview: true,
	},
}
