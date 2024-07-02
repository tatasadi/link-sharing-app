import Login from '@/components/sections/login'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/Login',
	component: Login,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
