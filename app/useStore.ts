import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { updateIconForLinkObject } from '@/lib/icon-helper'

export interface Link {
	id: string
	platform: string
	url: string
	icon?: React.ReactNode
	className?: string
}

export interface Profile {
	firstName?: string
	lastName?: string
	email?: string
}

interface StoreState {
	links: Link[]
	addLink: () => void
	removeLink: (id: string) => void
	updateLink: (id: string, platform: string, url: string) => void
	updateLinks: (links: Link[]) => void
	profile: Profile
	profileImageUrl?: string
	updateProfile: (profile: Profile) => void
	updateProfileImageUrl: (profileImageUrl: string) => void
	reset: () => void
}

const initialState = {
	links: [],
	profile: { firstName: '', lastName: '', email: '' },
	profileImageUrl: '',
}

export const useStore = create<StoreState>(set => ({
	...initialState,
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
			links: state.links.map(link =>
				link.id === id ? updateIconForLinkObject({ ...link, platform, url }) : link,
			),
		})),
	updateLinks: (links: Link[]) =>
		set(() => ({
			links,
		})),
	updateProfile: (profile: Profile) =>
		set(() => ({
			profile,
		})),
	updateProfileImageUrl: (profileImageUrl: string) =>
		set(() => ({
			profileImageUrl,
		})),
	reset: () => set(() => initialState),
}))
