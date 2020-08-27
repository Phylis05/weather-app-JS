/* eslint-disable no-use-before-define */
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
const toggleButton = document.querySelector('.toggle');

document.querySelector('.information').classList.add('d-none');
// let json;
// eslint-disable-next-line no-unused-vars
async function getWeather() {
  document.querySelector('.information').classList.remove('d-none');
  const path = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&APPID=2aaafb6d40ea0f22988d1512e3546a89&units=imperial`;
  const res = await fetch(path, { mode: 'cors' });
  const json = await res.json()

    .then((json) => {
      cityState.innerHTML = `${json.name}, ${json.sys.country}`;
      const temperature = json.main.temp;
      temp.innerHTML = `Temperature:${temperature}`;
      desc.innerHTML = json.weather[0].description;
      image.setAttribute('src', `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed}mph`;
      toggleTemp(temperature);

      const unixTimestamp = json.dt;
      const dateNow = new Date(unixTimestamp * 1000);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const year = dateNow.getFullYear();
      const month = months[dateNow.getMonth()];
      const dateToday = dateNow.getDate();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const weekDay = days[dateNow.getDay()];
      const formattedTime = `${weekDay} ${dateToday}, ${month}, ${year}`;
      date.innerHTML = formattedTime;
    }).catch((err) => {
      console.log(err.message);
    });
}
let value = true;
const toggleTemp = (f) => {
  document.querySelector('.toggle').addEventListener('click', () => {
    const farToCelsius = (f - 32) * (5 / 9);
    const celsiusToFar = (farToCelsius * (9 / 5)) + 32;

    if (!value) {
      temp.innerHTML = `Temperature: ${celsiusToFar.toFixed(2)}`;
      value = !value;
    } else {
      temp.innerHTML = `Temperature: ${farToCelsius.toFixed(2)}`;
      value = !value;
    }
  });
};

searchButton.addEventListener('click', () => {
  getWeather(`${searchCity.value}`);
});
