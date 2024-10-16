import EditLink from '@/components/edit-link'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Edit Link',
	component: EditLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof EditLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		index: 0,
		link: {
			id: '1',
			platform: 'github',
			url: 'https://www.github.com/',
		},
		form: {
			trigger: () => {},
			control: {},
			formState: {
				errors: {},
			},
		},
	},
}
