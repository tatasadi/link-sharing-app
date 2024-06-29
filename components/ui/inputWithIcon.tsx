import * as React from 'react'
import { Input } from './Input'
export default function InputWithIcon() {
	return (
		<div className="flex relative">
			<Input
				type="text"
				placeholder="Text Field Empty"
				className="px-9 py-3 opacity-50"
			/>
			<img
				src="/icon-arrow.svg"
				className="absolute top-3 left-2"
				alt="icon"
			/>
		</div>
	)
}
