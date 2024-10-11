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
	args: {},
}
