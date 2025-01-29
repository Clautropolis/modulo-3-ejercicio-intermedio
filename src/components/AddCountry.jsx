

function AddCountry({addValueData, valueData}) {

    const handleClick = (ev) => {
        ev.preventDefault()
        addValueData(valueData);
    }

    const handleChangeInput = (ev) => {
        const {name, value} = ev.target;
        setValueData((prevData) => ({
            ...prevData, [name] : value
        }))
    }



  return (
    <form action="">
        <input type="text" name="name" value={valueData.name} placeholder="Country Name" onChange={handleChangeInput}/>
        <input type="text" name="capital" value={valueData.capital} placeholder="Capital" onChange={handleChangeInput}/>
        <input type="text" name="flag" value={valueData.flag} placeholder="Falg Icon" onChange={handleChangeInput}/>
        <input type="text" name="continent" value={valueData.continent} placeholder="Continente" onChange={handleChangeInput}/>
        <input type="submit" onClick={handleClick}/>
    </form>
  )
}

export default AddCountry