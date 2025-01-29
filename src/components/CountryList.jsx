import EachCountry from "./EachCountry"
import PropTypes from "prop-types"


function CountryList({countryListInfo}) {

    const countryItemsHtml = countryListInfo.map((item, index) => {
        return <EachCountry key={index} countryData={item}/>
    })
  return (
    <section>
        {countryItemsHtml}
    </section>
  )
}

CountryList.propTypes = {
    countryListInfo: PropTypes.array
}

export default CountryList