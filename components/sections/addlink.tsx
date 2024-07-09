import data from '@/components/ui/data.json'
import Tab from '@/components/sections/tablink'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectSeparator,
} from '@/components/ui/select'
import { Input } from '../ui/input'

export default function Addlink() {
	return (
		<div>
			<div className="flex justify-between items-center mb-8">
				<p>Link #1</p>
				<p>Remove</p>
			</div>
			<label className="text-body-s text-pure-gray">Platform</label>
			<Select>
				<SelectTrigger className="mb-6">
					<SelectValue placeholder="Dropdown Field Default" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">
						{data.map((item, index) => (
							<Tab key={index} icon={item.icon} title={item.title} />
						))}
					</SelectItem>
					<SelectSeparator />
					<SelectItem value="dark">Item 2</SelectItem>
					<SelectSeparator />
					<SelectItem value="system">Item 3</SelectItem>
					<SelectSeparator />
				</SelectContent>
			</Select>
			<label className="text-body-s text-pure-gray">Link</label>
			<div className="flex relative mb-4">
				<Input
					type="email"
					placeholder="e.g. https://www.github.com/johnappleseed"
					className="px-9 py-3 opacity-50"
				/>
				<img
					src="/ph_link-bold.svg"
					className="absolute top-3 left-2"
					alt="icon"
				/>
			</div>
		</div>
	)
}
