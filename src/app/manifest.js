export default function manifest() {
	return {
		name: 'AllinHouse',
		short_name: 'AllinHouse',
		description:
			'Архитектурное бюро AllinHouse было основано в 2021г и разрабатывает проекты повсей России. В нашем портфолио более 40 проектов частных домов разного класса и стиля.',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon'
			}
		]
	}
}
