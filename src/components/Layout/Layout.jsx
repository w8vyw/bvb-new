import { Inter } from 'next/font/google'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal']
})

export function Layout({ children }) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				{/* <Header /> */}
				<main>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	)
}
