import { useEffect, useState } from 'react'

export function useMediaQuery(query) {
	const [matches, setMatches] = useState(null)

	useEffect(() => {
		const matchMedia = window.matchMedia(query)

		setMatches(matchMedia.matches)

		matchMedia.addEventListener('change', () => {
			setMatches(matchMedia.matches)
		})

		return () => {
			matchMedia.removeEventListener('change', () => {
				setMatches(matchMedia.matches)
			})
		}
	}, [query])

	return matches
}
