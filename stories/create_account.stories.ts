import Create from '@/components/sections/create_account'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Sections/Create',
	component: Create,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Create>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
