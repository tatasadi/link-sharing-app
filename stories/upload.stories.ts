import Upload from '@/components/ui/upload'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Upload',
	component: Upload,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Upload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
