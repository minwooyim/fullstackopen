import React from 'react';
import Directory from './Directory';
import DeleteButton from './DeleteButton'

const ActiveDirectory = (props) => {
	let { persons, filterWord, setPersons, setErrorMessage} = props;

	console.log('Within activedirectory, persons is', persons);
	console.log('filterWord is currently', filterWord);
	console.log('filterWord null status:', filterWord === null ? true : false);

	let name = persons.name;
	let number = persons.number;
	let id = persons.id;

	return(
	    <div>
	        {persons.map((persons) => <Directory key={persons.id} persons={persons} filterWord={filterWord} setPersons={setPersons} setErrorMessage={setErrorMessage}/>)}
	    </div>
	)
};

export default ActiveDirectory;
