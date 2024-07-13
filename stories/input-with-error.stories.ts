import InputWithError from '@/components/ui/input-with-error'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/InputWithError',
	component: InputWithError,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof InputWithError>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { error: 'Please check again' },
}
