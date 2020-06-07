import React from 'react'

const PersonForm = (props) => {

    let { newName, newNumber, setNewName, setNewNumber, persons, setPersons} = props

    const handleNameChange = (event) => {
		console.log(event.target.value);
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		console.log(event.target.value);
		setNewNumber(event.target.value);
    };
    
    const addNameAndNumber = (event) => {
		event.preventDefault();

		//check if you have both name and number
		if (newName.length === 0 || newNumber.length === 0) {
			window.alert('You are missing information');
		} else {
			const newNameObject = {
				name: newName,
				number: newNumber,
				date: new Date().toISOString(),
				id: persons.length + 1
			};

			//function checks if the name already exists
			const filteredPersons = persons.filter((personObject) => personObject.name === newName);
			console.log('filteredPersons is', filteredPersons);

			if (filteredPersons.length > 0) {
				window.alert(`${newName} already added to the phonebook`);
			} else {
				setPersons(persons.concat(newNameObject));
				console.log('New name added to persons is', newNameObject);
				console.log('So far, persons is', persons);
				setNewName('');
				setNewNumber('');
			}
		}
	};


    return (
        <form>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button onClick={addNameAndNumber}>add</button>
        </div>
    </form>
    )
}

export default PersonForm