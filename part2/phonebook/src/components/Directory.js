import React from 'react';
import DeleteButton from './DeleteButton'

const Directory = (props) => {
	console.log('Directory successfully loaded');

	let { id, persons, filterWord, setPersons, setErrorMessage } = props;
	let name = persons.name;
	let number = persons.number;

	console.log('Within directory persons is', persons)

	return (
		<p>{name} {number} <DeleteButton name={name} persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage}/></p>
	)

	//if there is no filter word, just return the name
	// if (filterWord.length===0) {
	// 	return (
	// 		<p>
	// 			{name}
	// 		</p>
	// 	);
	// } else {
	// 	//if there is a filter word, check the persons array
	// 	if (name.toLowerCase().includes(filterWord.toLowerCase()) === true) {
	// 		return (
	// 			<p>{name} {persons.number} <DeleteButton name={name} persons={persons} setPersons={setPersons}/></p>
	// 		)
	// 	} else {
	// 		//if there is a filterword and it doesnt exist, then just return nothing
	// 		return <p> </p>
	// 	}
	// }

	

};

export default Directory;
