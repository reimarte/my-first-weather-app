function displayWeather(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("#temperature");
  let description = document.querySelector("#weather-description");
  let cityName = document.querySelector("#city");
  h2.innerHTML = `${temperature}°C`;
  description.innerHTML = response.data.weather[0].description;
  cityName.innerHTML = response.data.name;
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("submit", handleSubmit);

let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

let dateNow = new Date();
let date = dateNow.getDate();
let year = dateNow.getFullYear();
let day = days[dateNow.getDay()];
let month = months[dateNow.getMonth()];
let today = `${day}, ${date} ${month}`;

function formatTime() {
  let minutes = dateNow.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = dateNow.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${minutes}`;
}

let currentDate = document.querySelector("h6#current-date");
currentDate.innerHTML = today;

let currentTime = document.querySelector("p#current-time");
currentTime.innerHTML = formatTime();
