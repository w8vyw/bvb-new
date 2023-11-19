import clsx from 'clsx'

import styles from './Text.module.scss'

export function Text({ className }) {
	return (
		<div className={clsx(styles.Text, className)}>
			<p className={styles.Title}>Заботимся о ваших грузах и бизнесе</p>
			<p>
				<span className={styles.Bold}>
					Работаем с крупным и малым бизнесом,
				</span>
				от розничных продавцов до крупных торговых сетей
			</p>
			<p>
				<span className={styles.Bold}>Полностью контролируем процесс</span> с
				момента заключения договоренности, до момента доставки груза к Вам на
				склад
			</p>
			<p className={styles.Small}>
				Мы решим вопросы с таможней и доставкой, пока Вы делаете свой бизнес
			</p>
		</div>
	)
}
