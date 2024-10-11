import Sociallink from '@/components/sections/sociallink'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Unknown/Sociallink',
	component: Sociallink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Sociallink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
