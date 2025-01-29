import PropTypes from "prop-types";

function EachCountry({countryData}) {

    const {name, capital, flag, continents} = countryData;

  return (
    <article>
        <p>{flag}</p>
        <h3>{name.official}</h3>
        <p>{capital}</p>
        <p>{continents}</p>
    </article>
  )
}

EachCountry.propTypes = {
    countryData: PropTypes.object
}

export default EachCountry