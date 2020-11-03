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

function showTemperature(response) {
  let currentCity = document.querySelector("#city-name");
  let mainTemp = document.querySelector("#something");
  let realFeel = document.querySelector("#realFeel");
  let currentHumidity = document.querySelector("#humidityLevel");
  let currentWindSpeed = document.querySelector("#windSpeed");
  let currentPressureLevels = document.querySelector("#pressureLevel");
  let currentWeatherConditions = document.querySelector("#weatherconditions");
  let currentIconStatus = document.querySelector("#icon");

  fahrenheitTemp = response.data.main.temp;

  currentCity.innerHTML = response.data.name;
  mainTemp.innerHTML = Math.round(fahrenheitTemp);
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

function search(city) {
  let apiKey = "62195a01c77939981afa2a73aa7e3da1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  search(cityInput.value);
}

function showCelsiusLinkTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#something");
  let celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
  tempElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusLinkTemp);

let fahrenheitTemp = null;

function showFahrenheitLinkTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#something");
  tempElement.innerHTML = Math.round(fahrenheitTemp);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitLinkTemp);

let discoverButton = document.querySelector("#discover-search");
discoverButton.addEventListener("submit", handleSubmit);

search("Boston");
