import clsx from 'clsx'

import styles from './List.module.scss'

export function List({ className, ...props }) {
	return (
		<ul className={clsx(styles.List, className)} {...props}>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#textile'></use>
				</svg>
				Текстиль
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#clothes'></use>
				</svg>
				Одежда и обувь
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#furniture'></use>
				</svg>
				Мебель
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#plumbing'></use>
				</svg>
				Сантехника
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#electronic'></use>
				</svg>
				Электроника
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#appliances'></use>
				</svg>
				Бытовая техника
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#container'></use>
				</svg>
				Оборудование и запчасти
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#cosmetic'></use>
				</svg>
				Косметика
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#brick'></use>
				</svg>
				Строительные материалы
			</li>
			<li className={styles.Item}>
				<svg className={styles.Svg}>
					<use href='/images/sprite.svg#eat'></use>
				</svg>
				Продукты питания
			</li>
		</ul>
	)
}
