import React from 'react';

const Total = ({ courses }) => {
	console.log('Component named Total has input:', courses);

	let { parts } = courses

	let initialValue = 0
	let sum = parts.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue['exercises']
	}, initialValue)

	return (
		<p>
			<li><b>Total number of exercises {sum}</b></li>
		</p>
	);
};

export default Total;
