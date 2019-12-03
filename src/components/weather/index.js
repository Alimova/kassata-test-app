import React, { useEffect, useState } from 'react';
import { getWeather, getLocations } from '../../api/api.js'; //TODO absolute path
import {debounce} from '../../utils'

require("../../styles/styles.css");

const debouncedGetLocations = debounce(getLocations, 300);

function useCities(searchQuery) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (searchQuery) {
            getLocations(searchQuery)
            .then(res => {
                    setCities(
                        res.map(city => ({
                            key: city.Key,
                            name: city.EnglishName,
                            district: city.AdministrativeArea.EnglishName,
                            country: city.Country.EnglishName,
                        }))
                    );
                }
            );
        }
        else if (cities.length) {
            setCities([]);
        }
    }, [searchQuery]);

    return cities;
}

function useWeather(cityKey) {
    const [weather, setWeather] = useState("");

    useEffect(() => {
        if(cityKey) {
            getWeather(cityKey)
                .then(res => {
                    const [forecast] = res.DailyForecasts
                    setWeather(forecast.Day.IconPhrase)
                })
        }
    }, [cityKey])

    return weather;
}

export default function Weather (props) {
    const [searchQuery, searchCity] = useState("");
    const [cityKey, setCityKey] = useState("215854");

    const cities = useCities(searchQuery);
    const weather = useWeather(cityKey);

    return (
        <div className="box">
            <div className="search-container">
                <span className="icon"><i className="fa fa-search"></i></span>
                <input
                    value={searchQuery}
                    onChange={e => searchCity(e.target.value)}
                    id="search"
                    placeholder="Search..."
                />
                <ul className="suggestions">
                    {cities.map(city => (
                    <li key={city.key} onClick={() => setCityKey(city.key)}>
                        {city.name}, {city.district}
                    </li>
                    ))}
                </ul>
                <legend>{weather}</legend>
            </div>
        </div>
    )
}
