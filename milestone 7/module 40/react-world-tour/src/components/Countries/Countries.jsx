import { useEffect, useState } from "react";
import Country from "../Country/country";
import './Countries.css'
const Countries = () =>{
    const [countries,setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])


    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = flag =>
    {
        const newVisitedCountriesFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedCountriesFlags)
    }
    return(
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                    }
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlag = {handleVisitedFlag}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries