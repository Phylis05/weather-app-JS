/* eslint-disable import/no-cycle */
import getWeather from './weather';

const searchCity = document.getElementById('search-city');
const searchButton = document.getElementById('search-button');
const cityState = document.querySelector('.city');
const date = document.querySelector('.date-day');
const image = document.querySelector('img');
const temp = document.querySelector('.temperature');
const desc = document.querySelector('.description');
const humidity = document.querySelector('.humidity-data');
const wind = document.querySelector('.wind-data');
const toggleButton = document.querySelector('.toggle');

const searchListener = (searchButton) => {
  searchButton.addEventListener('click', () => {
    getWeather(`${searchCity.value}`);
  });
};

export {
  searchCity,
  searchButton,
  cityState,
  date,
  image,
  temp,
  desc,
  humidity,
  wind,
  toggleButton,
  searchListener,
};