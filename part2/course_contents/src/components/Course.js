import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total'

const Course = ({ courses }) => {
    console.log('Courses component loaded successfully')
    console.log('Courses is:', courses)
	
	let { parts } = courses
	
	return (
		<div>
			<Header courses={courses} />
			<Content parts={parts} />
			<Total courses={courses} />
		</div>
	);
};

export default Course