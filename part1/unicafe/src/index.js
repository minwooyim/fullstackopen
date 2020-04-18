import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
	console.log('Header props is', props);
	return (
		<div>
			<h1>{props.headerText}</h1>
		</div>
	);
};

const SingularStatistic = (props) => {
	console.log('single statistics props is', props)

	return (
		<div>
			{props.text} {props.value}
		</div>
	)
};

const Statistics = (props) => {
	console.log('statisticsData prop is', props);
	console.log('props.good is', props.statisticsData.good);

	//conditional rendering used here
	if (props.statisticsData.all === 0) {
		return (
			<div>
				<h1>{props.statisticsData.headerText}</h1>
				<p> No feedback given </p>
			</div>
		);
	}

	return (
		<div>
			<h1>{props.statisticsData.headerText}</h1>
			<SingularStatistic text="good" value={props.statisticsData.good}/>
			<SingularStatistic text="neutral" value={props.statisticsData.neutral}/>
			<SingularStatistic text="bad" value={props.statisticsData.bad}/>
			<SingularStatistic text="all" value={props.statisticsData.all}/>
			<SingularStatistic text="average" value={props.statisticsData.average}/>
			<SingularStatistic text="positive" value={props.statisticsData.positive}/>
			
			{/* <h1>{props.statisticsData.headerText}</h1>
			<p>good {props.statisticsData.good}</p>
			<p>neutral {props.statisticsData.neutral}</p>
			<p>bad {props.statisticsData.bad}</p>
			<p>all {props.statisticsData.all}</p>
			<p>average {props.statisticsData.average}</p>
			<p>positive {props.statisticsData.positive} %</p> */}
		</div>
	);
};

const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
	// save clicks of each button to own state
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);
	const [ all, setAll ] = useState(0);

	const setGoodValue = () => {
		setGood(good + 1);
		setAll(all + 1);
		console.log('Good is', good);
		console.log('All is', all);
	};

	const setNeutralValue = () => {
		setNeutral(neutral + 1);
		setAll(all + 1);
	};

	const setBadValue = () => {
		setBad(bad + 1);
		setAll(all + 1);
	};

	const statisticsData = {
		headerText: 'statistics',
		good: good,
		neutral: neutral,
		bad: bad,
		all: good + neutral + bad,
		average: (good * 1 + neutral * 0 + bad * -1) / all,
		positive: ((good / all)*100).toString().concat('%')
	};

	const topHeaderText = 'give feedback';

	return (
		<div>
			<Header headerText={topHeaderText} />
			<Button handleClick={() => setGoodValue(good + 1)} text="good" />
			<Button handleClick={() => setNeutralValue(good + 1)} text="neutral" />
			<Button handleClick={() => setBadValue(good + 1)} text="bad" />
			<Statistics statisticsData={statisticsData} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
