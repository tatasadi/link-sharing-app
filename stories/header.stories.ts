import Header from '@/components/header'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/Header',
	component: Header,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
