/* eslint-disable no-unused-expressions */
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const searchCity = document.getElementById('search-city');
const searchButton = document.getElementById('search-button');
const cityState = document.querySelector('.city');
const date = document.querySelector('.date-day');
const image = document.querySelector('img');
const temp = document.querySelector('.temperature');
const desc = document.querySelector('.description');
const humidity = document.querySelector('.humidity-data');
const wind = document.querySelector('.wind-data');

document.querySelector('.information').classList.add('d-none');
let json;
// eslint-disable-next-line no-unused-vars
async function getWeather() {
  document.querySelector('.information').classList.remove('d-none');
  const path = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&APPID=2aaafb6d40ea0f22988d1512e3546a89&units=imperial`;
  co
  const res = await fetch(path, { mode: 'cors' });
  json = await res.json()

    .then((json) => {
      cityState.innerHTML = `${json.name}, ${json.sys.country}`;
      temp.innerHTML = json.main.temp;
      desc.innerHTML = json.weather[0].description;
      image.setAttribute('src', `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed}mph`;
    }).catch((err) => {
      console.log(err.message);
    });
}

searchButton.addEventListener('click', () => {
  getWeather(`${searchCity.value}`);
  // console.log(`${searchCity.value}`);
});
