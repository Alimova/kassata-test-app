const API_KEY = 'w95zbFwPDR1UrVyGdXJSbFXOSO5fcn42';
const API_HOST = 'http://dataservice.accuweather.com/';
const API_VERSION = 'v1';

const weatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/1day/${key}?apikey=${API_KEY}`;
const LocationApiUrl = (param, group, key) => `${API_HOST}locations/${API_VERSION}/${param}/${group}?apikey=${API_KEY}&q=${key}`;

export function getWeather(key) {
//   return fetch(weatherApiUrl(key))
//     .then(handleErrors)
//     .then(response => response.json())
//     .catch(error => console.log(error));
    return Promise.resolve({
        "Headline": {
          "EffectiveDate": "2019-11-20T07:00:00-08:00",
          "EffectiveEpochDate": 1574262000,
          "Severity": 7,
          "Text": "Windy tomorrow",
          "Category": "wind",
          "EndDate": "2019-11-20T19:00:00-08:00",
          "EndEpochDate": 1574305200,
          "MobileLink": "http://m.accuweather.com/en/us/sacramento-ca/95814/extended-weather-forecast/347627?lang=en-us",
          "Link": "http://www.accuweather.com/en/us/sacramento-ca/95814/daily-weather-forecast/347627?lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": "2019-11-19T07:00:00-08:00",
            "EpochDate": 1574175600,
            "Temperature": {
              "Minimum": {
                "Value": 49,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 67,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 2,
              "IconPhrase": "Mostly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/us/sacramento-ca/95814/daily-weather-forecast/347627?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/sacramento-ca/95814/daily-weather-forecast/347627?day=1&lang=en-us"
          }
        ]
      })
}

export function getLocations(key) {
    // return fetch(LocationApiUrl('cities', 'search', key))
    // .then(handleErrors)
    // .then(response => response.json())
    // .catch(error => console.log(error));
    return Promise.resolve([{
              Version: 1,
              Key: "347627",
              Type: "City",
              Rank: 31,
              LocalizedName: "Sacramento",
              EnglishName: "Sacramento",
              PrimaryPostalCode: "95814",
              Region: {
                ID: "NAM",
                LocalizedName: "North America",
                EnglishName: "North America"
              },
              Country: {
                ID: "US",
                LocalizedName: "United States",
                EnglishName: "United States"
              },
              AdministrativeArea: {
                ID: "CA",
                LocalizedName: "California",
                EnglishName: "California",
                Level: 1,
                LocalizedType: "State",
                EnglishType: "State",
                CountryID: "US"
              },
              TimeZone: {
                Code: "PST",
                Name: "America/Los_Angeles",
                GmtOffset: -8,
                IsDaylightSaving: false,
                NextOffsetChange: "2020-03-08T10:00:00Z"
              },
              GeoPosition: {
                Latitude: 38.582,
                Longitude: -121.494,
                Elevation: {
                  Metric: {
                    Value: 20,
                    Unit: "m",
                    UnitType: 5
                  },
                  Imperial: {
                    Value: 65,
                    Unit: "ft",
                    UnitType: 0
                  }
                }
              },
              IsAlias: false,
              SupplementalAdminAreas: [
                {
                  Level: 2,
                  LocalizedName: "Sacramento",
                  EnglishName: "Sacramento"
                }
              ],
              DataSets: [
                "Alerts",
                "DailyAirQualityForecast",
                "DailyPollenForecast",
                "ForecastConfidence",
                "MinuteCast",
                "Radar"
              ]
            },
            {
              Version: 1,
              Key: "39012",
              Type: "City",
              Rank: 65,
              LocalizedName: "Sacramento",
              EnglishName: "Sacramento",
              PrimaryPostalCode: "",
              Region: {
                ID: "SAM",
                LocalizedName: "South America",
                EnglishName: "South America"
              },
              Country: {
                ID: "BR",
                LocalizedName: "Brazil",
                EnglishName: "Brazil"
              },
              AdministrativeArea: {
                ID: "MG",
                LocalizedName: "Minas Gerais",
                EnglishName: "Minas Gerais",
                Level: 1,
                LocalizedType: "State",
                EnglishType: "State",
                CountryID: "BR"
              },
              TimeZone: {
                Code: "BRT",
                Name: "America/Sao_Paulo",
                GmtOffset: -3,
                IsDaylightSaving: false,
                NextOffsetChange: null
              },
              GeoPosition: {
                Latitude: -19.864,
                Longitude: -47.437,
                Elevation: {
                  Metric: {
                    Value: 893,
                    Unit: "m",
                    UnitType: 5
                  },
                  Imperial: {
                    Value: 2929,
                    Unit: "ft",
                    UnitType: 0
                  }
                }
              },
              IsAlias: false,
              SupplementalAdminAreas: [
                {
                  Level: 2,
                  LocalizedName: "Sacramento",
                  EnglishName: "Sacramento"
                },
                {
                  Level: 3,
                  LocalizedName: "Sacramento",
                  EnglishName: "Sacramento"
                }
              ],
              DataSets: [
                "Alerts"
              ]
            },
            {
              Version: 1,
              Key: "113031",
              Type: "City",
              Rank: 75,
              LocalizedName: "Sacramento",
              EnglishName: "Sacramento",
              PrimaryPostalCode: "",
              Region: {
                ID: "CAC",
                LocalizedName: "Central America",
                EnglishName: "Central America"
              },
              Country: {
                ID: "CR",
                LocalizedName: "Costa Rica",
                EnglishName: "Costa Rica"
              },
              AdministrativeArea: {
                ID: "H",
                LocalizedName: "Heredia",
                EnglishName: "Heredia",
                Level: 1,
                LocalizedType: "Province",
                EnglishType: "Province",
                CountryID: "CR"
              },
              TimeZone: {
                Code: "CST",
                Name: "America/Costa_Rica",
                GmtOffset: -6,
                IsDaylightSaving: false,
                NextOffsetChange: null
              },
              GeoPosition: {
                Latitude: 10.1,
                Longitude: -84.133,
                Elevation: {
                  Metric: {
                    Value: 1920,
                    Unit: "m",
                    UnitType: 5
                  },
                  Imperial: {
                    Value: 6300,
                    Unit: "ft",
                    UnitType: 0
                  }
                }
              },
              IsAlias: false,
              SupplementalAdminAreas: [
                {
                  Level: 2,
                  LocalizedName: "Santa Barbara",
                  EnglishName: "Santa Barbara"
                }
              ],
              DataSets: []
        }])
  }

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
