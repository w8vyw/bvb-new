export default function sitemap() {
	return [
		{
			url: 'https://allin-house.ru',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: 'https://allin-house.ru/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9
		},
		{
			url: 'https://allin-house.ru/portfolio',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9
		},
		{
			url: 'https://allin-house.ru/contacts',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: 'https://allin-house.ru/form',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7
		}
	]
}
