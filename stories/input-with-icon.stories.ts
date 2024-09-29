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
		id: 'input',
		placeholder: 'Text Field Empty',
	},
}

export const Filled: Story = {
	args: {
		id: 'input',
		value: 'Text Field Filled',
	},
}

export const Error: Story = {
	args: {
		id: 'input',
		value: 'Text Field Error',
		error: 'Please check again',
	},
}

export const WithIcon: Story = {
	args: {
		id: 'input',
		value: 'Text Field Filled',
		icon: iconArrow,
		iconAlt: 'Arrow Icon',
	},
}

export const WithIconAndError: Story = {
	args: {
		id: 'input',
		value: 'Text Field Filled',
		icon: iconArrow,
		iconAlt: 'Arrow Icon',
		error: 'Please check again',
	},
}

export const WithLabel: Story = {
	args: {
		id: 'input',
		value: 'Text Field Filled',
		label: 'Label',
	},
}

export const WithLabelAndError: Story = {
	args: {
		id: 'input2',
		value: 'Text Field Filled',
		label: 'Label',
		error: 'Please check again',
	},
}
