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
    let currentTemperature = Math.round(response.data.main.temp);
    let mainTemp = document.querySelector("#something");
    mainTemp.innerHTML = `${currentTemperature}°`;
  }
  function showRealFeel(response) {
    let feelsLike = Math.round(response.data.main.feels_like);
    let realFeel = document.querySelector("#realFeel");
    realFeel.innerHTML = `${feelsLike}°`;
  }
  function showHumidity(response) {
    let humidity = Math.round(response.data.main.humidity);
    let currentHumidity = document.querySelector("#humidityLevel");
    currentHumidity.innerHTML = `${humidity}%`;
  }
  function showHigh(response) {
    let highTemp = Math.round(response.data.main.temp_max);
    let currentHighTemp = document.querySelector("#highTemp");
    currentHighTemp.innerHTML = `High: ${highTemp}°`;
  }
  function showLow(response) {
    let lowTemp = Math.round(response.data.main.temp_min);
    let currentLowTemp = document.querySelector("#lowTemp");
    currentLowTemp.innerHTML = `Low: ${lowTemp}°`;
  }
  function showWindSpeed(response) {
    let windSpeed = Math.round(response.data.wind.speed);
    let currentWindSpeed = document.querySelector("#windSpeed");
    currentWindSpeed.innerHTML = `${windSpeed}mph`;
  }
  function showPressureLevels(response) {
    let pressureLevels = Math.round(response.data.main.pressure);
    let currentPressureLevels = document.querySelector("#pressureLevel");
    currentPressureLevels.innerHTML = `${pressureLevels}hPa`;
  }
  function showIcon(response) {
    let currentIconStatus = document.querySelector("#icon");
    currentIconStatus.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showRealFeel);
  axios.get(apiUrl).then(showHumidity);
  axios.get(apiUrl).then(showHigh);
  axios.get(apiUrl).then(showLow);
  axios.get(apiUrl).then(showWindSpeed);
  axios.get(apiUrl).then(showPressureLevels);
  axios.get(apiUrl).then(showIcon);
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
