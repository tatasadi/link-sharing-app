'use client'

import { fetchUserData } from '@/actions/data'
import { useStore } from '@/app/useStore'
import { updateIconForLinkObject } from '@/lib/icon-helper'
import { useEffect } from 'react'

export default function UpdateUserInStore() {
	const { updateProfile, updateLinks } = useStore()

	useEffect(() => {
		async function fetchData() {
			const result = await fetchUserData()
			if (result.success) {
				if (result.profile) {
					updateProfile(result.profile)
				}
				if (result.links && result.links.length > 0) {
					const linksWithIcons = result.links.map(link => updateIconForLinkObject(link))
					updateLinks(linksWithIcons)
				}
			}
		}

		fetchData()
	}, [updateLinks, updateProfile])
	return null
}
