function formatStamp(timestamp) {
let date = new Date(timestamp);
let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[date.getDay()];
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`
}
return `${day}, ${hour}:${minutes}`;
}

function getTemperature(response) {
let icon = document.querySelector("#current-icon");
  document.querySelector("#display-city").innerHTML = response.data.name;
document.querySelector("#current-temp").innerHTML = Math.round(response.data.main.temp) + "°C";
document.querySelector("#current-hi").innerHTML = `High ${Math.round(response.data.main.temp_max)}°C`;
document.querySelector("#current-lo").innerHTML = `Low ${Math.round(response.data.main.temp_min)}°C`;
document.querySelector(".current-desc").innerHTML = response.data.weather[0].main;
console.log(response.data.weather[0].icon);
icon.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
document.querySelector("#time").innerHTML = formatStamp(response.data.dt * 1000);
}

function searchCity(city){
let apiKey = "3da86be6c429d4c4add1a34a8165e552";
let apiUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
axios.get(apiUrl).then(getTemperature);
}

function userSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searched-city").value;
  searchCity(city);
}

let search = document.querySelector("form");
search.addEventListener("submit",userSubmit);


function changeFahrenheit() {
  let newTemp = document.querySelector("#current-temp");
  newTemp.innerHTML = "66°F";
}
let revise = document.querySelector("#fahrenheit-temp");
revise.addEventListener("click",changeFahrenheit);

function changeCelsius() {
  let newTemp = document.querySelector("#current-temp");
  newTemp.innerHTML = "19°C";
}
let revise2 = document.querySelector("#celsius-temp");
revise2.addEventListener("click",changeCelsius);
