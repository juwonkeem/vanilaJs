
const API_KEY = "ae90620a96939f64a1e691ee02d04508";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url).then(response => response.json())
              .then(data => {
               const weather = document.querySelector("#weather span:first-child")
               const city = document.querySelector("#weather span:last-child")
               city.innerText = data.name; 
               weather.innerText = data.weather[0].main;
              })
}

function onGeoError() {
    alert("Can't find you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
