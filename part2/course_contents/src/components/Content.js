import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
    console.log('Content component input is:', parts)


	// return (
	// 	<div>
	// 			<Part courses={courses}/>
	// 	</div>
	// );

	return (
		<div>
			{parts.map((parts) => <Part key={parts.parts_id} name={parts.name} exercises={parts.exercises} />)}
		</div>
	)
};

export default Content;
