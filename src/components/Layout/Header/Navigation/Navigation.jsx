'use client'

import Link from 'next/link'

import styles from './Navigation.module.scss'

export function Navigation() {
	return (
		<nav className={styles.Navigation}>
			<ul className={styles.List}>
				<li className={styles.Item}>
					<a
						className={styles.Link}
						href='https://wa.me/79857757493'
						target='_blank'
					>
						<svg className={styles.WhatsApp}>
							<use href='/images/sprite.svg#wa'></use>
						</svg>
					</a>
				</li>
				<li className={styles.Item}>
					<a className={styles.Link} href='tel:+79857757493'>
						+7 985 775 74 93
					</a>
				</li>
				<li className={styles.Item}>
					<a className={styles.Link} href='mailto:info@bvblogistics.com'>
						info@bvblogistics.com
					</a>
				</li>
				<li className={styles.Item}>
					<Link className={styles.Link} href='#service'>
						service
					</Link>
				</li>
				<li className={styles.Item}>
					<a className={styles.Link} href='#' target='_blank'>
						Ссылка
					</a>
				</li>
				<li className={styles.Item}>
					<Link className={styles.Link} href='/'>
						Какой-то текст
					</Link>
				</li>
			</ul>
		</nav>
	)
}
