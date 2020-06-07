import React from 'react'
import personService from '../services/personService'
import ActiveDirectory from './ActiveDirectory'

const DeleteButton = (props) => {

    let { name, persons, setPersons, setErrorMessage } = props
    console.log('When initially declared, persons is', persons)
    console.log('the type of persons is', typeof(persons))
    let id = persons.id

    const deleteNote = () => {
        console.log('deleteNote was activated')
        console.log('persons is', persons)
        
        personService
            .deleteEntry(id)
            .then(response => {
                console.log('response is', response)
                console.log('Successful in deleting person')
                //setPersons(Object.values(persons).filter(person => person.id !== id))
                personService
                    .getAll()
                    .then(response => {
                        setPersons(response)
                    })
                    .catch(error => {
                        console.log("Unsuccessful in loading db, error was: ", error)
                    })
                console.log('post process persons is', persons)
            })
            .catch(error => {
                setErrorMessage(
                    `the person '${persons.name}' no longer exists in the databse`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                console.log(error, 'Unsuccessful in deleting person')
            })

        
    }

    const confirmDelete = (event) => {
        console.log('within the confirm delete, persons is', persons)
        const userDeleteChoice = window.confirm(`Delete ${name}`)
        
        if(userDeleteChoice===true){
            deleteNote()
        } else {
            console.log('User clicked cancel')
        }
        
    }


    return (
            <button onClick={ confirmDelete }>
                delete
            </button>
        
    )
}


export default DeleteButton