let now = new Date();

let date = document.querySelector(".date");
let time = document.querySelector(".time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayss = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let day = now.getDate();
let year = now.getFullYear();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}

date.innerHTML = `${dayss}, ${month} ${day}, ${year},  ${hour}:${min}`;

///////////////////////////////////////////////////////////////////////

function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector(".temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "ccb4c7eb152b43871ad4f34df333d880";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}

function searchLocation(position) {
  let units = "metric";
  let apiKey = "ccb4c7eb152b43871ad4f34df333d880";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

////  buttons  ////
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
let currentLocationButton = document.querySelector("#current-position-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
