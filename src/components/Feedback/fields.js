const fields = [
	{
		label: 'Откуда',
		placeholder: 'Стамбул',
		required: true
	},
	{ label: 'Куда', placeholder: 'Москва', required: true },
	{ label: 'Груз', placeholder: 'Одежда' },
	{ label: 'Вес', placeholder: '100', note: 'кг' },
	{
		label: 'Объем',
		placeholder: '',
		note: 'м3'
	},
	{ label: 'Код ТН ВЭД' },
	{
		label: 'Количество мест'
	},
	{
		label: 'Компания',
		note: 'Так нам будет проще вас запомнить'
	},
	{ label: 'Имя', required: true },
	{ label: 'Телефон', placeholder: '+7999999999', required: true }
	// {
	// 	label: 'Эл. почта',
	// 	placeholder: 'example@example.com'
	// }
]

export default fields
