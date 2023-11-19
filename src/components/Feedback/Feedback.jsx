'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './Feedback.module.scss'

import fields from './fields'

import { Heading } from '../ui/Heading/Heading'
import { Section } from '../ui/Section/Section'
import { Wrapper } from '../ui/Wrapper/Wrapper'

export function Feedback() {
	const {
		register,
		handleSubmit,
		formState: { isValid },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const [dispatchStatus, setDispatchStatus] = useState(null)

	async function onSubmit(data) {
		let body = ''
		for (const key in data) {
			body += encodeURIComponent(`<strong>${key}:</strong> ${data[key]}\n`)
		}
		const response = await fetch('/api/form', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if (response.ok) {
			const resultResponse = await response.json()
			if (resultResponse.ok) {
				reset()
				setDispatchStatus('success')
				setTimeout(() => {
					setDispatchStatus(null)
				}, 5000)
			} else {
				setDispatchStatus('error')
				setTimeout(() => {
					setDispatchStatus(null)
				}, 5000)
			}
		} else {
			setDispatchStatus('error')
			setTimeout(() => {
				setDispatchStatus(null)
			}, 5000)
		}
	}

	return (
		<Section className={styles.Feedback} id='feedback'>
			<Wrapper className={styles.Container}>
				<Heading className={styles.Heading}>Оставьте заявку!</Heading>
				<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
					{fields.map(field => (
						<label className={styles.Label} key={field.label}>
							<span className={styles.Label__Text}>{field.label}</span>
							<input
								className={styles.Input}
								type='text'
								placeholder={field?.placeholder}
								{...register(field.label, {
									required: field?.required
								})}
							/>
							<span className={styles.Label__Note}>{field?.note}</span>
						</label>
					))}

					<p
						className={clsx(
							styles.Status,
							(isValid ||
								(dispatchStatus !== null && dispatchStatus !== 'error')) &&
								styles.Success
						)}
					>
						{dispatchStatus === null
							? isValid
								? 'Все обязательные поля заполнены.'
								: 'Пожалуйста, заполните все обязательные поля'
							: dispatchStatus === 'success'
							  ? 'Заявка отправлена успешно'
							  : 'Ошибка при отправке заявки'}
					</p>
					<button
						className={styles.Button}
						type='submit'
						disabled={dispatchStatus !== null && !isValid}
					>
						Отправить
					</button>
				</form>
			</Wrapper>
		</Section>
	)
}
