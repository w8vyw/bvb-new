'use client'

import clsx from 'clsx'
import NextLink from 'next/link'

import styles from './Navigation.module.scss'

export function Navigation() {
	return (
		<nav className={styles.Navigation}>
			<ul className={styles.List}>
				<li className={clsx(styles.Item, styles.WhatsAppItem)}>
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
				<li className={clsx(styles.Item, styles.ContactItem)}>
					<a className={styles.Link} href='tel:+79857757493'>
						+7 985 775 74 93
					</a>
				</li>
				<li className={clsx(styles.Item, styles.ContactItem)}>
					<a className={styles.Link} href='mailto:info@bvblogistics.com'>
						info@bvblogistics.com
					</a>
				</li>
				<li className={clsx(styles.Item, styles.NavItem)}>
					<NextLink className={styles.Link} href='/#about'>
						О нас
					</NextLink>
				</li>
				<li className={clsx(styles.Item, styles.NavItem)}>
					<NextLink className={styles.Link} href='/#service'>
						Услуги
					</NextLink>
				</li>
				<li className={styles.Item}>
					<NextLink
						className={clsx(styles.Link, styles.Button)}
						href='/#feedback'
					>
						Оставить заявку
					</NextLink>
				</li>
			</ul>
		</nav>
	)
}
