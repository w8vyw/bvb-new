import clsx from 'clsx'

import styles from './Heading.module.scss'

export function Heading({ className, children, ...props }) {
	return (
		<h2 className={clsx(styles.Heading, className)} {...props}>
			{children}
		</h2>
	)
}
