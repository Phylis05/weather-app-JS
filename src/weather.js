// import {
//   searchCity, searchButton, cityState, date, image, temp, desc, humidity, wind,
// } from './dom';

// async function getWeather(city) {
//   // const path = `https://api.openweathermap.org/data/2.5/weather?q=$'+searchCity.value+'&appid=2aaafb6d40ea0f22988d1512e3546a89&units=imperial`;
//   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=$${city}&appid=2aaafb6d40ea0f22988d1512e3546a89&units=imperial`);
//   const json = await res.json();

//   return json;
// }
// // let city;

// // const displayData = (json) => {
// //   cityState.innerHTML = json.name;
// //   temp.innerHTML = json.main.temp;
// //   desc.innerHTML = json.weather[0].description;
// //   image.setAttribute('src', `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
// //   humidity.innerHTML = `${json.main.humidity}%`;
// //   wind.innerHTML = `${json.wind.speed}mph`;
// // }


// export default getWeather();