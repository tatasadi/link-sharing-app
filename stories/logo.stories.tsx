import type { Meta, StoryObj } from '@storybook/react'
import IconLink from '@/components/icons/icon-link'
import Logo from '@/components/logo'

const meta = {
	title: 'Components/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
