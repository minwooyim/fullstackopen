import React from 'react';
import Course from './Course';

const App = () => {
	
	console.log('Successfully loaded App');

	const courses = [
		{
			name: 'Half Stack application development',
			course_id: 1,
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10,
					parts_id: 1
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					parts_id: 2
				},
				{
					name: 'State of a component',
					exercises: 14,
					parts_id: 3
				},
				{
					name: 'Redux',
					exercises: 11,
					parts_id: 4
				}
			]
		},
		{
			name: 'Node.js',
			course_id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					parts_id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					parts_id: 2
				}
			]
		}
	];

	return (
		<div>
			{/* <Course courses={courses} /> */}
			{courses.map((courses) => <Course key={courses.course_id} courses={courses} />)}
		</div>
	);
};

export default App;
