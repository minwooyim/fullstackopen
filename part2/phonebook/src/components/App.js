import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import PersonForm from './PersonForm';
import ActiveDirectory from './ActiveDirectory';

const App = () => {
	const [ persons, setPersons ] = useState(
		[
			//
		]
	);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState(
		[
			//
		]
	);
	const [ filterWord, setFilterWord ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('some error happened')

	console.log('within App persons type is ', typeof(persons))

	useEffect(() => {
		console.log('effect');
		axios.get('http://localhost:3001/persons').then((response) => {
			console.log('promise fulfilled');
			setPersons(response.data);
		});
	}, []);
	console.log('render', persons.length, 'notes');

	// ...

	return (
		<div>
			<h1>Phonebook</h1>
			<form>
				<Filter filterWord={filterWord} setFilterWord={setFilterWord} />
			</form>
			<h2>add a new</h2>
			<PersonForm
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				persons={persons}
				setPersons={setPersons}
			/>
			<h2>Numbers</h2>
			<ActiveDirectory persons={persons} filterWord={filterWord} setPersons={setPersons} setErrorMessage={setErrorMessage}/>
		</div>
	);
};

export default App;
