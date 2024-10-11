import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export interface Link {
	id: string
	platform: string
	url: string
}

interface StoreState {
	links: Link[]
	addLink: () => void
	removeLink: (id: string) => void
	updateLink: (id: string, platform: string, url: string) => void
}

export const useStore = create<StoreState>(set => ({
	links: [],
	addLink: () =>
		set((state: StoreState) => ({
			links: [...state.links, { id: uuidv4(), platform: '', url: '' }],
		})),
	removeLink: (id: string) =>
		set((state: StoreState) => ({
			links: state.links.filter(link => link.id !== id),
		})),
	updateLink: (id: string, platform: string, url: string) =>
		set((state: StoreState) => ({
			links: state.links.map(link => (link.id === id ? { ...link, platform, url } : link)),
		})),
}))
