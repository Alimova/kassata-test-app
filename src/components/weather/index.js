import React, { useState, useEffect } from 'react';
import { getWeather } from '../../api/api.js'; //TODO absolute path

export default function Weather (props) {
    const [currentCity] = useState('215854');

    useEffect(() => {
        getWeather(currentCity)
            .then((res) => {
                console.log(res);
            },
            err => {
                console.here('err ' + err);
            },
            ()=> {
                console.log('error');
            });
    });

    return <div />
}
