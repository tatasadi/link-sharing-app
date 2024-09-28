import SocialDropdown from '@/components/social-dropdown'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/SocialDropdown',
	component: SocialDropdown,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SocialDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
