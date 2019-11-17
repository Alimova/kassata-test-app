const API_KEY = 'w95zbFwPDR1UrVyGdXJSbFXOSO5fcn42';
const API_HOST = 'http://dataservice.accuweather.com/';
const API_VERSION = 'v1';

const weatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/1day/${key}?apikey=${API_KEY}`;

export function getWeather(key) {
  return fetch(weatherApiUrl(key))
    .then(handleErrors)
    .then(response => response.json())
    .catch(error => console.log(error));
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}