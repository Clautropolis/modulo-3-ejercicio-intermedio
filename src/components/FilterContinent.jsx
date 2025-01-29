
import PropTypes from "prop-types"

function FilterContinent({changeSearchContinent}) {

    const handleSelect = (ev) => {
        console.log(ev.target.value)
        changeSearchContinent(ev.target.value)
    }

  return (
    <select name="" id="" onChange={handleSelect}> 
        <option value="All">Selecciona un continente</option>
        <option value="Africa">Africa</option>
        <option value="North America">América del norte</option>
        <option value="South America">América del sur</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antártida</option>
    </select>
  )
}

FilterContinent.propTypes = {
    changeSearchContinent: PropTypes.func
}


export default FilterContinent