import Empty from '@/components/sections/empty'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/Empty',
	component: Empty,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
