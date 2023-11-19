import styles from './Header.module.scss'

import { Logo } from '@/components/ui/Logo/Logo'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import { Navigation } from './Navigation/Navigation'

export function Header() {
	return (
		<header className={styles.Header}>
			<Wrapper className={styles.Container}>
				<Logo className={styles.Logo} />
				<Navigation />
			</Wrapper>
		</header>
	)
}
