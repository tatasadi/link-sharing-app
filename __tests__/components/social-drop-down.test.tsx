import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SocialDropdown from '@/components/social-dropdown'
import { useForm, FormProvider } from 'react-hook-form'
import { describe, it, expect, vi } from 'vitest'
import { useEffect } from 'react'

// Mock Next.js Image component
vi.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element
		return <img {...props} />
	},
}))

// Mock for the `getSocialIcons` function
vi.mock('@/lib/icon-helper', () => ({
	default: () => [
		{ name: 'GitHub', icon: <span>GitHub Icon</span> },
		{ name: 'Twitter', icon: <span>Twitter Icon</span> },
	],
}))

// Create a wrapper component to ensure proper useForm context
const TestWrapper = ({
	name,
	onChange,
	defaultValue = '',
	withError = false,
}: {
	name: string
	onChange: () => void
	defaultValue?: string
	withError?: boolean
}) => {
	const methods = useForm({
		defaultValues: {
			[name]: defaultValue,
		},
	})

	// Manually set an error if `withError` is true
	useEffect(() => {
		if (withError) {
			methods.setError(name, { type: 'manual', message: 'Platform is required' })
		}
	}, [methods, name, withError])

	return (
		<FormProvider {...methods}>
			<SocialDropdown form={methods} name={name} onChange={onChange} />
		</FormProvider>
	)
}

describe('SocialDropdown component', () => {
	it('renders the dropdown with default placeholder', () => {
		render(<TestWrapper name="platform" onChange={() => {}} />)

		// Check if the placeholder text is rendered
		expect(screen.getByText(/select a platform/i)).toBeInTheDocument()
	})

	// it('displays social platforms when opened', async () => {
	// 	render(<TestWrapper name="platform" onChange={() => {}} />)

	// 	// Open the dropdown
	// 	fireEvent.click(screen.getByRole('combobox'))

	// 	// Wait for the options to appear and check if the social platforms are rendered
	// 	const options = await screen.findAllByRole('option')
	// 	expect(options).toHaveLength(2) // GitHub and Twitter
	// 	expect(screen.getByText('GitHub')).toBeInTheDocument()
	// 	expect(screen.getByText('Twitter')).toBeInTheDocument()
	// })

	// it('calls onChange when a platform is selected', async () => {
	// 	const handleChange = vi.fn()

	// 	render(<TestWrapper name="platform" onChange={handleChange} />)

	// 	// Open the dropdown
	// 	fireEvent.click(screen.getByRole('combobox'))

	// 	// Wait for the options and select one
	// 	const option = await screen.findByText('GitHub')
	// 	fireEvent.click(option)

	// 	// Check if the onChange handler was called
	// 	expect(handleChange).toHaveBeenCalled()
	// })

	// it('shows selected platform after selection', async () => {
	// 	render(<TestWrapper name="platform" onChange={() => {}} />)

	// 	// Open the dropdown and select a platform
	// 	fireEvent.click(screen.getByRole('combobox'))
	// 	const option = await screen.findByText('Twitter')
	// 	fireEvent.click(option)

	// 	// Check if the selected platform is displayed
	// 	expect(screen.getByText('Twitter')).toBeInTheDocument()
	// })

	it('displays validation error message when form state has an error', () => {
		// Render the SocialDropdown component with error state
		render(<TestWrapper name="platform" onChange={() => {}} withError />)

		// Check if the error message is displayed
		expect(screen.getByText(/platform is required/i)).toBeInTheDocument()
	})
})
