import { About } from '@/components/About/About'
import { Advantages } from '@/components/Advantages/Advantages'
import { Banner } from '@/components/Banner/Banner'
import { Feedback } from '@/components/Feedback/Feedback'
import { Service } from '@/components/Service/Service'

export function HomeScreen() {
	return (
		<>
			<Banner />
			<About />
			<Service />
			<Advantages />
			<Feedback />
		</>
	)
}
