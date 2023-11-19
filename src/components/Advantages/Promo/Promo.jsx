import clsx from 'clsx'

import styles from './Promo.module.scss'

export function Promo({ className }) {
	return (
		<div className={clsx(styles.Promo, className)}>
			<svg className={styles.Icon}>
				<use href='/images/sprite.svg#wa'></use>
			</svg>
			<p className={styles.Title}>Производим точный расчет по WhatsApp</p>
			<p className={styles.Description}>
				12 минут - среднее время предоставления расчета и диалога
			</p>
			<a
				className={styles.Button}
				href='https://wa.me/79857757493'
				target='_blank'
			>
				Рассчитать
			</a>
		</div>
	)
}
