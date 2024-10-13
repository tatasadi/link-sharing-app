import CustomizeProfile from '@/components/sections/customize-profile'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/CustomizeProfile',
	component: CustomizeProfile,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CustomizeProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
