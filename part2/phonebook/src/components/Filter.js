import React from 'react'


const Filter = (props) => {

    let { filterWord , setFilterWord } = props

    const handleFilterWordChange = (event) => {
		console.log(event.target.value)
		setFilterWord(event.target.value)
	}

    return (
        <div>
            Filter names shown with: <input value={filterWord} onChange={handleFilterWordChange} />
        </div>
    )
}

export default Filter
