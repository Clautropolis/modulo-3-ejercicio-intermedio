import PropTypes from "prop-types"

function FilterCountry({changeSearch}) {

    const handleInputChange = (ev) => {
        changeSearch(ev.target.value)
    }

  return (
    <form action="">
        <input type="text" placeholder="Country" onChange={handleInputChange}/>
    </form>
  )
}

FilterCountry.propTypes = {
    changeSearch: PropTypes.func
}

export default FilterCountry