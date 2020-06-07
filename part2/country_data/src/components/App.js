import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchCountries from './SearchCountries'



function App()   {
  const [ countries, setCountries ] = useState([])
  const [ filterWord, setFilterWord ] = useState('')
  const [ displayCountries, setDisplayCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])

  useEffect(() => {
      console.log('effect')
      axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'notes');
  console.log(countries[0], countries[1])

  const handleFilterWordChange = (event) => {
      console.log(event.target.value)
      setFilterWord(event.target.value)
      
  }


  return (
    <div>
    <h1>Data for countries</h1>
      <form>
        <div>
            Find Countries: <input value={filterWord} onChange={handleFilterWordChange} />
        </div>
      </form>
        <div>
          <h2>
            Searched Countries
          </h2>
          <SearchCountries filterWord={filterWord} countries={countries} filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}/>
        </div>
    </div>
  );
}

export default App;
