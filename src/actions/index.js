import axios from 'axios';

const API_KEY = "36284c9e6ce75d93ea4198ea77031dd9";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&mode=json`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const reqUrl = `${ROOT_URL}&q=${cityName},us`;
  const request = axios.get(reqUrl);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
