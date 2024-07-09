import Addlink from '@/components/sections/addlink'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/Addlink',
	component: Addlink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Addlink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
