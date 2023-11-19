import clsx from 'clsx'

import styles from './Section.module.scss'

export function Section({ className, children, ...props }) {
	return (
		<section className={clsx(styles.Section, className)} {...props}>
			{children}
		</section>
	)
}
