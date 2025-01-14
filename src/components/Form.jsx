
const Form = ({setCity}) => {

    const handleClickGetWeather = e => {
        e.preventDefault()
        setCity(new String(e.target.city.value));
    }

    return ( 
        <form onSubmit={handleClickGetWeather} >
            <input className="input" name={'city'}  type={"text"}/>
            <button type={"submit"} className="button">Get Weather</button>
        </form>
    )
}

export default Form