import Profile from '@/components/sections/profile'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Unknown/Profile',
	component: Profile,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
