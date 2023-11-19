import NextImage from 'next/image'

import styles from './About.module.scss'

import { Heading } from '@/components/ui/Heading/Heading'
import { Section } from '@/components/ui/Section/Section'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import Image from '@/assets/images/about.png'

export function About() {
	return (
		<Section className={styles.Section}>
			<Wrapper className={styles.Container}>
				<NextImage
					className={styles.Image}
					priority
					src={Image}
					alt='Работник с посылками'
					placeholder='blur'
				/>
				<div className={styles.Text}>
					<Heading>О компании</Heading>
					<p>
						Компания BVB LOGISTICS была основана в 2008 году. За время своего
						существования мы успели заслужить отличную репутацию и хорошие
						отклики от своих клиентов по всему миру. Мы успешно выполнили более
						1000 доставок различных типов груза из Турции.
					</p>
					<p>
						Нашими специалистами осуществляется оперативная международная
						доставка различных грузов.
					</p>
					<p>Мы не завышаем цены и всегда идем навстречу клиентам.</p>
					<p>
						Мы оперативно выполним заказ любой сложности, как для юридических,
						так и для физических лиц.
					</p>
					<p>
						Сотрудничать с нами выгодно и удобно, ведь мы устанавливаем разумные
						цены на свои услуги и индивидуально подходим к каждому клиенту,
						аккуратно упаковываем товар и доставляем с ГАРАНТИЕЙ.
					</p>
					<p>
						Мы являемся таможенным представителем и логистическим оператором
						полного цикла.
					</p>
				</div>
			</Wrapper>
		</Section>
	)
}
