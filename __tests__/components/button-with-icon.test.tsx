import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import ButtonWithIcon from '@/components/button-with-icon'

describe('ButtonWithIcon component', () => {
	it('renders the button with the correct text and icon', () => {
		// Render the ButtonWithIcon component
		render(
			<ButtonWithIcon icon={<span>🌟</span>} isActive={false}>
				Click me
			</ButtonWithIcon>,
		)

		// Check if the button text and icon are rendered correctly
		expect(screen.getByText(/click me/i)).toBeInTheDocument()
		expect(screen.getByText('🌟')).toBeInTheDocument()
	})

	it('applies the active styles when isActive is true', () => {
		// Render the ButtonWithIcon component with isActive set to true
		render(
			<ButtonWithIcon icon={<span>🌟</span>} isActive={true}>
				Active Button
			</ButtonWithIcon>,
		)

		// Check if the button has the active class
		const button = screen.getByRole('button', { name: /active button/i })
		expect(button).toHaveClass('bg-light-purple text-purple')
	})

	it('does not apply active styles when isActive is false', () => {
		// Render the ButtonWithIcon component with isActive set to false
		render(
			<ButtonWithIcon icon={<span>🌟</span>} isActive={false}>
				Inactive Button
			</ButtonWithIcon>,
		)

		// Check if the button does not have the active class
		const button = screen.getByRole('button', { name: /inactive button/i })
		expect(button).not.toHaveClass('bg-light-purple text-purple')
	})

	it('renders the children only on larger screens', () => {
		// Render the ButtonWithIcon component
		render(
			<ButtonWithIcon icon={<span>🌟</span>} isActive={false}>
				Hidden Text
			</ButtonWithIcon>,
		)

		// Check if the hidden text is rendered but not visible on smaller screens
		const hiddenText = screen.getByText(/hidden text/i)
		expect(hiddenText).toHaveClass('hidden sm:block')
	})

	it('applies additional custom class', () => {
		// Render the ButtonWithIcon component with a custom class
		render(
			<ButtonWithIcon icon={<span>🌟</span>} isActive={false} className="custom-class">
				Custom Class Button
			</ButtonWithIcon>,
		)

		// Check if the custom class is applied to the button
		const button = screen.getByRole('button', { name: /custom class button/i })
		expect(button).toHaveClass('custom-class')
	})
})
