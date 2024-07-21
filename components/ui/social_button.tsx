import React from 'react'
import { Button } from './button'

export default function Social({ icon, text, color }) {
	return (
		<Button
			variant="ghost"
			className="flex text-white p-4 min-w-[13.2rem] max-h-[2.5rem] gap-2 rounded-lg items-center"
			style={{ backgroundColor: color }}
		>
			<img src={icon} />
			<p>{text}</p>
			<img src="/mdi_arrow-right.svg" className="ml-auto" />
		</Button>
	)
}
