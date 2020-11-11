let h4 = document.querySelector("h4");
let currentDay = new Date();
let year = currentDay.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[currentDay.getMonth()];
let date = currentDay.getDate();
let hours = currentDay.getHours();
let minutes = currentDay.getMinutes();
h4.innerHTML = `${date} /${month} /${year}  ${hours}:${minutes}` ;


function currentTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let weather = document.querySelector("h3");
  weather.innerHTML = `${temperature}°C`;
  let city = response.data.name;
  let h1 = document.querySelector(`h1`);
  h1.innerHTML = `${city}`;
}

function currentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = `88493d926515e36fa055dfe27bbb8ecd`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

function searchCity(city) {
  let apiKey = `88493d926515e36fa055dfe27bbb8ecd`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}
function cityInput(event) {
  event.preventDefault();
  let city = document.querySelector("#text-input").value;
  searchCity(city);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", cityInput);

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
