import * as React from 'react'
import { Input } from './input'
import { cn } from '@/lib/utils'
export default function InputWithError({ error }) {
	return (
		<div className="flex relative">
			<Input
				type="text"
				placeholder="Text Field Empty"
				className={cn(
					'pr-14 pl-9 py-3 text-body-m',
					error ? 'border-dark-red placeholder:text-dark-red' : '',
				)}
			/>
			<img
				src="/icon-arrow.svg"
				className="absolute top-3 left-2"
				alt="icon"
			/>
			{error && (
				<p className="text-dark-red text-body-s absolute bottom-[.45rem] right-0 mr-1">
					{error}
				</p>
			)}
		</div>
	)
}
