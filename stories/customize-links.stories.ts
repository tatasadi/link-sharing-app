import CustomizeLinks from '@/components/sections/customize-links'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/Customize Links',
	component: CustomizeLinks,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CustomizeLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
