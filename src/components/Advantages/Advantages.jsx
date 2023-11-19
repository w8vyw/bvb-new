'use client'

import styles from './Advantages.module.scss'

import { List } from './List/List'
import { Promo } from './Promo/Promo'
import { Text } from './Text/Text'

import { Heading } from '../ui/Heading/Heading'
import { Section } from '../ui/Section/Section'
import { Wrapper } from '../ui/Wrapper/Wrapper'

export function Advantages() {
	return (
		<Section className={styles.Advantages} id='advantages'>
			<Heading className={styles.Heading}>Почему именно мы?</Heading>
			<Wrapper className={styles.Container}>
				<Text className={styles.Text} />
				<List className={styles.List} />
				<Promo className={styles.Promo} />
			</Wrapper>
		</Section>
	)
}
