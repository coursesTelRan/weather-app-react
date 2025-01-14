import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";

const Data = () => {
    const [city, setCity] = useState('');

    return (
        <div className="col-sm-7 form">
            <Form setCity={setCity} />
            <Weather city={city} />
        </div>
    );
};

export default Data;
