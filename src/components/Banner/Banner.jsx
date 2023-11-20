'use client'

import NextImage from 'next/image'
import { register } from 'swiper/element/bundle'

import styles from './Banner.module.scss'

import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import Image1 from '@/assets/images/banner/1.jpg'
import Image2 from '@/assets/images/banner/2.jpg'
import Image3 from '@/assets/images/banner/3.jpg'
import Image4 from '@/assets/images/banner/4.jpg'

register()

export function Banner() {
	return (
		<section className={styles.Container}>
			<swiper-container
				class={styles.SwiperContainer}
				autoplay='true'
				autoplay-delay='4000'
				autoplay-disable-on-interaction='false'
				loop='true'
				effect='fade'
				speed='800'
			>
				<swiper-slide>
					<NextImage
						className={styles.Image}
						priority
						src={Image1}
						alt=''
						placeholder='blur'
					/>
				</swiper-slide>
				<swiper-slide class={styles.SwiperSlide}>
					<NextImage
						className={styles.Image}
						src={Image2}
						alt=''
						placeholder='blur'
					/>
				</swiper-slide>
				<swiper-slide class={styles.SwiperSlide}>
					<NextImage
						className={styles.Image}
						src={Image3}
						alt=''
						placeholder='blur'
					/>
				</swiper-slide>
				<swiper-slide class={styles.SwiperSlide}>
					<NextImage
						className={styles.Image}
						src={Image4}
						alt=''
						placeholder='blur'
					/>
				</swiper-slide>
			</swiper-container>
			<div className={styles.Content}>
				<Wrapper className={styles.Content__Container}>
					<h1 className={styles.Text__Title}>
						Оперативная доставка грузов из Турции с гарантией
					</h1>
				</Wrapper>
			</div>
		</section>
	)
}
