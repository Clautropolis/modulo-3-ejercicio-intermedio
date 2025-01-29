import dataJson from '../services/data.json';
import '../styles/App.scss'
import AddCountry from './AddCountry';
import CountryList from './CountryList';
import FilterContinent from './FilterContinent'
import FilterCountry from './FilterCountry';
import Header from './Header';
import { useState } from 'react';


function App() {

  const [searchCountryValue, setSearchCountryValue] = useState ('');
  const [searchContinentValue, setSearchContinentValue] = useState ('All');


  const [valueData, setValueData] = useState ({
    name: '',
    capital: '',
    flag: '',
    continent:''
  })
  // const [addValueName, setAddValueName] = useState ('');
  // const [addValueCapital, setAddValueCapital] = useState ('');
  // const [addValueFlag, setAddValueFlag] = useState ('');
  // const [addValueContinent, setAddValueContinent] = useState ('');

  const addValueData = (value) => {
    setValueData(value)
    addCountry()
  }

  const addCountry = () => {
    dataJson.push(valueData)
  }


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
        {/* <AddCountry addValueData={addValueData} valueData={valueData}/> */}
        <CountryList countryListInfo={filterCountries}/>
      </main>
      
      </>
    
  );
}

export default App
