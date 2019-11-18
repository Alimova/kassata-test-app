import React, { useState, useEffect, useRef } from 'react';
import { getLocations, getWeather } from '../../api/api.js'; //TODO absolute path

export default function Weather (props) {
    const [searchQuery, searchCity] = useState('Tel Aviv');
    const searchRef = useRef();
    const [currentCity] = useState('215854');

    const predictions = getLocationsList(searchQuery);

    async function getLocationsList(searchQuery){
        console.log(searchQuery)
        const response = await getLocations(searchQuery)
        // const json = await response.json();
        console.log(response.map(val => ({key: val.Key, name: val.EnglishName})))
        // getWeather(json.Key);
        return await response.map(val => ({key: val.Key, name: val.EnglishName})) || Array.prototype;
    }

    useEffect(() => {
        searchRef.current = searchQuery;
    });

    return (
        <div className="box">
            <div className="search-container">
                <legend>Current city {currentCity}</legend>
                <span className="icon"><i className="fa fa-search"></i></span>
                <input
                    type="search"
                    value={searchQuery}
                    onChange={e => searchCity(e.target.value)}
                    id="search"
                    placeholder="Search..."
                />
                <ul>
                    {predictions.map((city) => (
                    <li key={city.key}>{city.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
