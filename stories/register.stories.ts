import Register from '@/components/sections/register'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/Register',
	component: Register,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Register>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
