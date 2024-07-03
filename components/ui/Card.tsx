import React from 'react'

export default function Card({ icon, text, color }) {
	return (
		<div
			className="flex text-white p-4 min-w-[15rem] max-h-[3rem] gap-2 rounded-lg items-center"
			style={{ backgroundColor: color }}
		>
			<img src={icon} />
			<p>{text}</p>
			<img src="/mdi_arrow-right.svg" className="ml-auto" />
		</div>
	)
}
