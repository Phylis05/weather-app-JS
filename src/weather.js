/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import {
  searchCity,
  searchButton,
  cityState,
  date,
  image,
  temp,
  desc,
  humidity,
  wind,
  searchListener,
} from './dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import toggleTemp from './convertTemp';


async function getWeather() {
  const path = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&APPID=2aaafb6d40ea0f22988d1512e3546a89&units=imperial`;
  const res = await fetch(path, { mode: 'cors' });
  const json = await res.json()

    .then((json) => {
      cityState.innerHTML = `${json.name}, ${json.sys.country}`;
      const temperature = json.main.temp;
      temp.innerHTML = `Temperature: ${temperature}°F`;
      desc.innerHTML = `Desc: ${json.weather[0].description}`;
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

      document.querySelector('.information').classList.remove('hide');
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err.message);
    });
}

searchListener(searchButton);


export default getWeather;