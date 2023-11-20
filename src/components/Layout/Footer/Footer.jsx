import styles from './Footer.module.scss'

import { Logo } from '@/components/ui/Logo/Logo'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

export function Footer() {
	return (
		<footer className={styles.Footer}>
			<Wrapper className={styles.Wrapper}>
				<div className={styles.Block}>
					<Logo />
					Оперативная международная доставка грузов
				</div>
				<div className={styles.Block}>
					<a href='tel:+79857757493'>+7 985 775 74 93</a>
					<a href='tel:+79604161771'>+7 960 416 17 71</a>
					<a href='tel:+905511890683'>+90 551 189 06 83</a>
					<a href='mailto:info@bvblogistics.com'>info@bvblogistics.com</a>
				</div>
				<div className={styles.Block}>
					<a
						href='https://yandex.ru/maps/104760/inegol/house/66_sok_7b/ZkAYcg5mQU0EQFpqfX1xd31jZQ'
						target='_blank'
					>
						<span>66-я улица, 7B, Джумхуриет, Инегёль, Бурса, Турция</span>
						<span>
							CUMHURİYET MAH. 66. SK. NO: 7 J- İÇ KAPI NO: - İNEGÖL/BURSA
						</span>
					</a>
				</div>
			</Wrapper>
		</footer>
	)
}
