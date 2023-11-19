import clsx from 'clsx'

import styles from './Wrapper.module.scss'

export function Wrapper({ className, children, ...props }) {
	return (
		<div className={clsx(styles.Wrapper, className)} {...props}>
			{children}
		</div>
	)
}
