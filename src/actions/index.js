import axios from 'axios';

const API_KEY = "32f94d7321018228f4a37b517df35858";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
