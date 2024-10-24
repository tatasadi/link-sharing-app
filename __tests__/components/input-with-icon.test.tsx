import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { useForm, FormProvider } from 'react-hook-form'
import InputWithIcon from '@/components/input-with-icon'
import { describe, it, expect } from 'vitest'
import { StaticImageData } from 'next/image'
import { useEffect } from 'react'

// Mock StaticImageData
const mockIcon: StaticImageData = {
	src: '/mock-icon.png',
	height: 48,
	width: 48,
	blurDataURL: '',
	blurWidth: 0,
	blurHeight: 0,
}

// Create a wrapper component to ensure proper useForm context
const TestWrapper = ({
	name,
	label,
	defaultValue = '',
	icon,
	iconAlt = '',
	inputClassName,
	withError = false, // Add error simulation flag
}: any) => {
	const methods = useForm({
		defaultValues: {
			[name]: defaultValue,
		},
	})

	// Manually set an error if `withError` is true
	useEffect(() => {
		if (withError) {
			methods.setError(name, { type: 'manual', message: 'This field is required' })
		}
	}, [methods, name, withError])

	return (
		<FormProvider {...methods}>
			<InputWithIcon
				name={name}
				label={label}
				icon={icon}
				iconAlt={iconAlt}
				inputClassName={inputClassName}
				placeholder="Enter value"
				control={methods.control}
			/>
		</FormProvider>
	)
}

describe('InputWithIcon component', () => {
	it('renders the input field with a label', () => {
		render(<TestWrapper name="test" label="Test Label" />)

		// Check if label is present
		expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
	})

	it('renders the input field without an icon', () => {
		render(<TestWrapper name="test" label="Test Label" />)

		// Check if input is rendered without an icon
		expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
		expect(screen.queryByRole('img')).not.toBeInTheDocument()
	})

	it('renders the input field with an icon', () => {
		render(<TestWrapper name="test" label="Test Label" icon={mockIcon} iconAlt="icon" />)

		// Check if input is rendered with the icon
		expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
		expect(screen.queryByAltText('icon')).toBeInTheDocument()
	})

	it('shows error styling when error message is passed from react-hook-form state', () => {
		render(<TestWrapper name="test" label="Test Label" withError />)

		// Check if error message is displayed
		expect(screen.getByText(/this field is required/i)).toBeInTheDocument()

		// Check if the error message has the error class
		const errorMessage = screen.getByText(/this field is required/i)
		expect(errorMessage).toHaveClass('text-destructive')
	})

	it('does not show error message when no error is present', () => {
		render(<TestWrapper name="test" label="Test Label" />)

		// Check that there is no error message
		expect(screen.queryByText(/this field is required/i)).not.toBeInTheDocument()
	})

	it('updates value correctly when user types', async () => {
		render(<TestWrapper name="test" label="Test Label" />)

		// Simulate user typing
		const input = screen.getByLabelText(/test label/i)
		await userEvent.type(input, 'New Value')

		// Check if input value is updated correctly
		expect(input).toHaveValue('New Value')
	})

	it('renders with custom inputClassName', () => {
		const customClass = 'custom-input-class'

		render(<TestWrapper name="test" label="Test Label" inputClassName={customClass} />)

		// Check if the custom class is applied
		const input = screen.getByLabelText(/test label/i)
		expect(input).toHaveClass(customClass)
	})
})
