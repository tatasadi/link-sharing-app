export default function Tab({ title, icon, color }) {
	return (
		<div
			className="flex gap-4 p-2"
			style={{ backgroundColor: color }}
		>
			{icon}
			<p>{title}</p>
		</div>
	)
}
