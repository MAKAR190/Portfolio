"use strict"
// * BG
const body = document.querySelector("body");

const colors = ["greenyellow","purple", "orange","lightblue", "lightgreen"];

const bg = setInterval(function () {
    var bodybgarrayno = Math.floor(Math.random() * colors.length);
    var selectedcolor = colors[bodybgarrayno];
    body.style.transition = 1 + "s";
    body.style.background = selectedcolor;
}, 12000);


//*     API

const api_key = "64e89a7c1d614b74824c1015330a08cd";
const input = document.querySelector(".city")
const weather = document.querySelector(".text-info");
const getData = async (e) => {
    const city = input.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    const info = await response.json();
    console.log(info);

    let sunset = info.sys.sunset;
    let date = new Date();
    date.setTime(sunset);
    let sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let sunrise = info.sys.sunrise;
    date.setTime(sunrise);
    let sunriseDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    weather.innerHTML = `
    <p class="response">Temperature: <span class="g-response">${info.main.temp}</span></p>
    <p class="response">General: <span class="g-response">${info.weather[0].description}</span></p>
    <p class="response">Sunrise Time: <span class="g-response">${sunriseDate}</span></p>
    <p class="response">Sunset Time: <span class="g-response">${sunsetDate}</span></p>
    <p class="response">Min Temperature: <span class="g-response">${info.main.temp_min}</span></p>
    <p class="response">Max Temperature: <span class="g-response">${info.main.temp_max}</span></p>
    `
}

const btn = document.querySelector(".weather-btn");
btn.addEventListener("click", getData);
