import { useState } from "react";
import "./country.css";
const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    const {name,flags,population,area, cca3}=country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    const passWithParams = () =>{
        handleVisitedCountry(country)
    }
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <img src={flags.png } alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark as visited</button><br />
            <button onClick={()=>handleVisitedFlag(flags.png)}>Add visited flag</button>
            <br/>
            <button onClick={handleVisited}>{ visited ? 'Visited':'Going'}</button> <br />
            {visited ? 'I have visited this country....':'I want to visit'}
        </div>
    );
};

export default Country;