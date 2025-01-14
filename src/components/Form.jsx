
const Form = ({setCity}) => {

    const handleClickGetWeather = e => {
        e.preventDefault()
        const city = e.target.city.value.trim();
        setCity(new String(city));
    }

    return ( 
        <form onSubmit={handleClickGetWeather} >
            <input className="input" name={'city'}  type={"text"}/>
            <button type={"submit"} className="button">Get Weather</button>
        </form>
    )
}

export default Form