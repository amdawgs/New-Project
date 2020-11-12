function stamp(event) {
let now = new Date();
let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let sentence = document.querySelector("#time");
 sentence.innerHTML = `Last refreshed ${day}, ${hour}:${minutes}`;
}
stamp();

function getTemperature(response) {
document.querySelector("#display-city").innerHTML = response.data.name;
document.querySelector("#current-temp").innerHTML = Math.round(response.data.main.temp) + "°C";
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


function changeScaleToF() {
  let newTemp = document.querySelector("#current-temp");
  newTemp.innerHTML = "66°C";
}
let revise = document.querySelector("#fahrenheit-temp");
revise.addEventListener("click",changeScaleToF);

function changeScaleToC() {
  let newTemp = document.querySelector("#current-temp");
  newTemp.innerHTML = (`${temperatiure}`);
}
let revise2 = document.querySelector("#celsius-temp");
revise2.addEventListener("click",changeScaleToC);

