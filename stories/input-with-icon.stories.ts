import InputWithIcon from '@/components/input-with-icon'
import type { Meta, StoryObj } from '@storybook/react'
import iconArrow from '@/public/icon-arrow.svg'

const meta = {
	title: 'Components/Input',
	component: InputWithIcon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof InputWithIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
	args: {
		placeholder: 'Text Field Empty',
	},
}

export const Filled: Story = {
	args: {
		value: 'Text Field Filled',
	},
}

export const Error: Story = {
	args: {
		value: 'Text Field Error',
		error: 'Please check again',
	},
}

export const WithIcon: Story = {
	args: {
		value: 'Text Field Filled',
		icon: iconArrow,
		iconAlt: 'Arrow Icon',
	},
}

export const WithIconAndError: Story = {
	args: {
		value: 'Text Field Filled',
		icon: iconArrow,
		iconAlt: 'Arrow Icon',
		error: 'Please check again',
	},
}
