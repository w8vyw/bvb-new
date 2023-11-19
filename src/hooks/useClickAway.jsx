'use client'

import { useEffect, useRef } from 'react'

export function useClickAway(cb) {
	const ref = useRef(null)

	useEffect(() => {
		const handler = e => {
			const element = ref.current
			if (element && !element.contains(e.target)) {
				cb(e)
			}
		}

		document.addEventListener('mousedown', handler)
		document.addEventListener('touchstart', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
			document.removeEventListener('touchstart', handler)
		}
	}, [cb])

	return ref
}
