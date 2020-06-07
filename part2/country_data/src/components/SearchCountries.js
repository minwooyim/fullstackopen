import React from 'react';
import DisplayData from './DisplayData'

const SearchCountries = (props) => {
	const { filterWord, countries, filteredCountries, setFilteredCountries } = props;
	console.log('Inputs for SearchCountries are: ', filterWord, ',', countries);
	
	//if there isnt any filter word just return 'waiting'
	if (filterWord.length === 0) {
		return <p>Waiting...</p>;
	}

	// otherwise, lets look through and check if the filterword exists in the countries
	const totalFilteredCountries = countries.filter((country) => country.name.toLowerCase().includes(filterWord));
	console.log('totalFilteredCountries is', totalFilteredCountries);

	// if the total number of filtered countries is just ONE then we return some other properties
	if (totalFilteredCountries.length === 1) {
		const singleFilteredCountryLanguages = totalFilteredCountries[0].languages.map((language) => (
			<p>{language.name}</p>
		));
		console.log('singleFilteredCountriesLanguages is', singleFilteredCountryLanguages);

		return (
			<div>
				<h2> Country:{totalFilteredCountries[0].name}</h2>
				<p> Capital: {totalFilteredCountries[0].capital}</p>
				<p> Population: {totalFilteredCountries[0].population}</p>
				<h2>Languages</h2>
				<ol>{singleFilteredCountryLanguages}</ol>
				<img src={totalFilteredCountries[0].flag} />
			</div>
		);
	}
	

	const displayFilteredCountriesList = totalFilteredCountries.map((country) => 
		<div>
			<li>
				{country.name}
				<DisplayData country={country}/>
			</li>
		</div>
	);

	console.log('Result for totalFilteredCountries is: ', totalFilteredCountries);
	console.log('length for totalFilteredCountries is: ', totalFilteredCountries.length);
	console.log('nameFilteredCountries is', displayFilteredCountriesList);

	if (totalFilteredCountries.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	} else if (totalFilteredCountries.length < 10 && totalFilteredCountries.length > 1) {
		return (
				<p>{displayFilteredCountriesList}</p>
		)
	} else {
		return (
			<div>
				<p />
			</div>
		);
	}
};

export default SearchCountries;
