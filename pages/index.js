import Head from 'next/head'
import Meta from '../components/Meta'
import { useState, useEffect } from 'react'
import chrono from 'chrono-node'
import moment from 'moment'
import TimezoneGrid from '../components/TimezoneGrid'

export default function Home() {
	let [date, setDate] = useState(Date.now())
	let [currentTime, setCurrentTime] = useState(moment(date).format('h:mm A'))

	useEffect(() => {
		setCurrentTime(moment(date).format('h:mm A'))
	}, [date])

	const timeChange = (value) => {
		if (value == '') {
			setDate(Date.now())
			return
		}
		let parse = chrono.parse(value + ' today')
		if (typeof parse[0].start !== 'undefined') {
			setDate(parse[0].start.date())
		}
	}

	return (
		<>
			<Head>
				<Meta/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main>
				<div className="vertCenter">
					<h1>Tempus 🕒</h1>
					<input
						autoFocus
						placeholder={currentTime}
						onChange={(e) => timeChange(e.target.value)}
						type="text"
					/>
				</div>
				<div className="vertCenter">
					<h2>{currentTime} your time is...</h2>
				</div>
				<TimezoneGrid date={date} />
				<div className="vertCenter footer">
					<a href="https://tmb.sh">Built by Theo with ☀️ & 👨‍💻</a>
				</div>
			</main>

			<style jsx>{`
				.footer {
					margin-top: 2rem;
				}

				.footer a {
					color: white;
				}

				main {
					padding: 2rem;
					max-width: 64rem;
					width: 100%;
					margin: auto;
				}

				h2 {
					margin-bottom: 2rem;
					color: white;
				}

				h1 {
					color: white;
					font-size: 4em;
					flex-basis: 100%;
					text-align: center;
					margin-bottom: 1.5rem;
				}

				.vertCenter {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
				}

				input {
					margin-bottom: 2rem;
					color: white;
					height: 8rem;
					width: 100%;
					font-size: 5rem;
					text-align: center;
					box-shadow: -4px 4px 20px 2px #424242;
					border: 3px solid white;
					border-radius: 10px;
					outline: none;
				}

				input::focus {
					outline: none;
				}
			`}</style>
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					background-color: #242424;
					font-family: 'Roboto Slab', serif;
				}
			`}</style>
		</>
	)
}
