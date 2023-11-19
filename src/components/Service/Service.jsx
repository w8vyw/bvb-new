import NextLink from 'next/link'

import styles from './Service.module.scss'

import { List } from './List/List'

import { Heading } from '../ui/Heading/Heading'
import { Section } from '../ui/Section/Section'
import { Wrapper } from '../ui/Wrapper/Wrapper'

export function Service() {
	return (
		<Section className={styles.Section} id='service'>
			<Wrapper className={styles.Container}>
				<Heading className={styles.Heading}>
					Какие грузы мы можем привезти Вам из Турции?
				</Heading>
				<List className={styles.List} />
				<div className={styles.Note}>
					<p>Вашего товара нет в списке?</p>
					<p>
						<NextLink className={styles.Note__Link} href='#feedback'>
							Свяжитесь с нами!
						</NextLink>
						Мы разберемся и привезем то, что вам нужно!
					</p>
				</div>
			</Wrapper>
		</Section>
	)
}
