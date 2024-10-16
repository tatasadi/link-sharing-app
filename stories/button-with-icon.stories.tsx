import ButtonWithIcon from '@/components/button-with-icon'
import type { Meta, StoryObj } from '@storybook/react'
import IconLink from '@/components/icons/icon-link'

const meta = {
	title: 'Components/ButtonWithIcon',
	component: ButtonWithIcon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonWithIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Button',
		icon: <IconLink />,
		isActive: false,
	},
}

export const PrimaryActive: Story = {
	args: {
		children: 'Button',
		icon: <IconLink />,
		isActive: true,
	},
}
