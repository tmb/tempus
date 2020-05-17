export default ({ name, time, days, tz }) => {
	const toClass = {
		'-1': 'minus-one-day',
		'-2': 'minus-two-days',
		'-3': 'minus-three-days',
		'1': 'one-day',
		'2': 'two-days',
		'3': 'three-days',
		'0': '',
	}

	let dayClass = toClass[days.toString()]

	return (
		<div>
			<p className={dayClass}>{time}</p>
			<span className="location">{name}</span>
			<style jsx>
				{`
					* {
						text-align: center;
					}
					div {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
					}

					span {
						flex-basis: 100%;
					}

					p {
						font-weight: bold;
						color: white;
						font-size: 2em;
						flex-basis: 100%;
					}

					.location {
						color: #b2b2b2;
					}

					.minus-one-day::after {
						content: '-1 day';
						font-size: 0.5em;
						position: absolute;
						margin-left: 0.25rem;
					}
					.minus-two-days::after {
						content: '-2 days';
						font-size: 0.5em;
						position: absolute;
						margin-left: 0.25rem;
					}
					.minus-three-days::after {
						content: '-3 days';
						font-size: 0.5em;
						position: absolute;
						margin-left: 0.25rem;
					}

					.one-day::after {
						content: '+1 day';
						font-size: 0.5em;
						position: absolute;
						margin-left: 0.25rem;
					}
					.two-days::after {
						content: '+2 days';
						font-size: 0.5em;
						position: absolute;
						margin-left: 0.25rem;
					}
					.three-days::after {
						content: '+3 days';
						font-size: 0.5em;
						position: absolute;
						margin-left: 0.25rem;
					}
				`}
			</style>
		</div>
	)
}
