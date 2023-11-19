import '@/assets/styles/main.scss'

import { Layout } from '@/components/Layout/Layout'

export const metadata = {
	applicationName: '',

	// metadataBase: new URL('https://'),

	alternates: {
		canonical: '/'
	},

	verification: {
		yandex: '',
		google: ''
	},

	title: '',

	description: '',

	openGraph: {
		title: '',
		description: '',
		url: 'https://',
		siteName: '',
		locale: 'ru_RU',
		type: 'website'
	},

	robots: {
		index: true,
		follow: true
	},

	referrer: 'no-referrer-when-downgrade'
}

export default function RootLayout({ children }) {
	return <Layout>{children}</Layout>
}
