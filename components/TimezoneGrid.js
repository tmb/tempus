import moment from 'moment-timezone'
import TimeCard from './TimeCard'

export default ({ date }) => {
	const timezones = {
		'Etc/UTC': 'UTC',
		'America/New_York': 'New York, US',
		'America/Chicago': 'Chicago, US',
		'America/Denver': 'Denver, US',
		'America/Los_Angeles': 'Los Angeles, US',
		'America/Juneau': 'Juneau, AK, US',
		'Europe/Moscow': 'Moscow, RU',
		'Asia/Tokyo': 'Tokyo, JP',
		'Asia/Shanghai': 'Shanghai, CN',
		'Asia/Singapore': 'Singapore, SG',
		'Asia/Kolkata': 'Kolkata, IN',
		'Europe/Paris': 'Paris, FR',
		'Europe/London': 'London, UK',
		'Australia/Perth': 'Perth, AU',
		'Australia/Sydney': 'Sydney, AU',
	}

	return (
		<div>
			{Object.keys(timezones).map((tz, i) => {
				let momentDate = moment(date)
				let tzd = moment(date).tz(tz)

				let cd = parseInt(momentDate.format('D'))
				let fd = parseInt(tzd.format('D'))

				let diff = fd - cd

				let normalizedCity = timezones[tz]

				return (
					<TimeCard
						key={i}
						name={normalizedCity}
						time={tzd.format('h:mm A')}
						days={diff}
						tz={tz}
					/>
				)
			})}
			<style jsx>
				{`
					@media (min-width: 36rem) {
						div {
							grid-template-columns: repeat(3, 1fr) !important;
						}
					}
					div {
						display: grid;
						grid-gap: 0.5rem;
						grid-template-columns: 1fr;
					}
				`}
			</style>
		</div>
	)
}
