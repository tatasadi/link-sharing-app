import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import Logo from '@/components/logo'
import solarLinkImage from '@/public/solar_link-circle-bold.svg'
import devlinks from '@/public/devlinks.svg'

// Mock for Next.js Image component
vi.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => <img {...props} />,
}))

describe('Logo component', () => {
	it('renders the logo icon', () => {
		// Render the Logo component
		render(<Logo />)

		// Check if the logo icon is rendered with the correct src
		const iconImage = screen.getByAltText(/logo icon/i)
		expect(iconImage).toBeInTheDocument()
		expect(iconImage).toHaveAttribute('src', solarLinkImage.src)
	})

	it('renders the logo text image only on md screens and larger', () => {
		// Render the Logo component
		render(<Logo />)

		// Check if the logo text image is rendered with the correct src
		const textImage = screen.getByAltText(/logo text/i)
		expect(textImage).toBeInTheDocument()
		expect(textImage).toHaveAttribute('src', devlinks.src)

		// Check if the logo text image has the hidden class for small screens
		expect(textImage).toHaveClass('hidden md:block')
	})

	it('applies additional className passed to the component', () => {
		const customClass = 'custom-class'

		// Render the Logo component with an additional class
		render(<Logo className={customClass} />)

		// Check if the custom class is applied to the root div
		const container = screen.getByAltText(/logo icon/i).parentElement
		expect(container).toHaveClass(customClass)
	})
})
