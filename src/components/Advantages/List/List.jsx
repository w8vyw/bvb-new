import styles from './List.module.scss'

export function List() {
	return (
		<ul className={styles.List}>
			<li className={styles.Item}>
				{/* <svg className={styles.Icon}>
					<use href='/images/sprite.svg#windows'></use>
				</svg> */}
				<div className={styles.Text}>
					<p className={styles.Title}>Принцип одного окна</p>
					<p>
						Вы получите персонального менеджер. Эксперт ответит на все ваши
						вопросы по перевозке
					</p>
				</div>
			</li>
			<li className={styles.Item}>
				{/* <svg className={styles.Icon}>
					<use href='/images/sprite.svg#secure'></use>
				</svg> */}
				<div className={styles.Text}>
					<p className={styles.Title}>Отвечаем за сохранность груза</p>
					<p>
						Все грузы застрахованы. Если что-то случится с грузом, Вы получите
						выплату до 100% от его стоимости
					</p>
				</div>
			</li>
			<li className={styles.Item}>
				{/* <svg className={styles.Icon}>
					<use href='/images/sprite.svg#lists'></use>
				</svg> */}
				<div className={styles.Text}>
					<p className={styles.Title}>Бюрократию берем на себя</p>
					<p>
						Разгрузим вас или ваш отдел ВЭД! Мы сами заполняем документ, Вам
						остается их только подписать.
					</p>
				</div>
			</li>
		</ul>
	)
}
