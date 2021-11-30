
const weatherGrop = document.getElementById("weather");
const API_KEY = "0bcf5adc56637145be43e7e848307a3d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data=> {
        const weather = weatherGrop.querySelector("#temp");
        const city = weatherGrop.querySelector("#city");
        const icon = weatherGrop.querySelector("#icon");
        city.innerText = data.name;
        icon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp - 273.15)}℃`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);