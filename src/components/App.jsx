import dataJson from '../services/data.json';
import '../styles/App.scss'
import CountryList from './CountryList';
import FilterContinent from './FilterContinent';
import FilterCountry from './FilterCountry';
import Header from './Header';
import { useState } from 'react';


function App() {

  const [searchCountryValue, setSearchCountryValue] = useState ('');
  const [searchContinentValue, setSearchContinentValue] = useState ('All');

  const changeSearch = (value) => {
    setSearchCountryValue(value.toLowerCase())
  }

  const changeSearchContinent = (value) => {
    setSearchContinentValue(value)
  }

  const filterCountries = dataJson.filter((country) => country.name.official.toLowerCase().includes(searchCountryValue))

   .filter((eachCountry) => {
    if (searchContinentValue === 'All') {
      return true;
    }
    return eachCountry.continents.includes(searchContinentValue)

   })
  

  return (
      <>
      <Header />
      <main>
        <FilterCountry changeSearch={changeSearch}/>
        <FilterContinent changeSearchContinent={changeSearchContinent}/>
        <CountryList countryListInfo={filterCountries}/>
      </main>
      
      </>
    
  );
}

export default App
