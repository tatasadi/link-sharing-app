import Preview from '@/components/sections/preview'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Preview',
	component: Preview,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Preview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
