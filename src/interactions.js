let now = new Date();
let currentTime = document.querySelector(".currentDayAndTime");

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

let currentYear = now.getFullYear();
let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let currentMinute = now.getMinutes();
let currentHour = now.getHours();

if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
if (currentHour > 12) {
  currentHour = currentHour - 12;
}

currentTime.innerHTML = `${currentDay} ${currentMonth} ${currentDate}, ${currentHour}:${currentMinute}`;

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-name");
  let cityInput = document.querySelector("#search-city");
  cityName.innerHTML = `${cityInput.value}`;

  let apiKey = "62195a01c77939981afa2a73aa7e3da1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${apiKey}`;

  function showTemperature(response) {
    let mainTemp = document.querySelector("#something");
    let realFeel = document.querySelector("#realFeel");
    let currentHumidity = document.querySelector("#humidityLevel");
    let currentWindSpeed = document.querySelector("#windSpeed");
    let currentPressureLevels = document.querySelector("#pressureLevel");
    let currentWeatherConditions = document.querySelector("#weatherconditions");
    let currentIconStatus = document.querySelector("#icon");

    mainTemp.innerHTML = Math.round(response.data.main.temp);
    realFeel.innerHTML = Math.round(response.data.main.feels_like);
    currentHumidity.innerHTML = Math.round(response.data.main.humidity);
    currentWindSpeed.innerHTML = Math.round(response.data.wind.speed);
    currentPressureLevels.innerHTML = Math.round(response.data.main.pressure);
    currentWeatherConditions.innerHTML = response.data.weather[0].description;
    currentIconStatus.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  axios.get(apiUrl).then(showTemperature);
}
let discoverButton = document.querySelector("#discover-search");
discoverButton.addEventListener("submit", search);

// let locationByGeographicCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=62195a01c77939981afa2a73aa7e3da1`;
// let lat = position.coords.latitude;
// let lon = position.coords.longitude;
// function getCurrentPosition() {
//   navigator.geolocation.getCurrentPosition(showPosition);
// }

// let button = document.querySelector("currentLocation");
// button.addEventListener("click", getCurrentPosition);

// function showCelsiusLinkTemp(event) {
//   event.preventDefault();
//   let celsiusTemperature = (68−32)*5/9;
// }

function showCelsiusLinkTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#something");
  let celsiusTemp = ((tempElement.innerHTML - 32) * 5) / 9;
  tempElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusLinkTemp);
