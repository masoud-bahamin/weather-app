let locationName = document.getElementById("location");
let temp = document.getElementById("temp");
let weatherName = document.getElementById("weather-name");
let weather = document.getElementById("weather");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let windSpeed = document.getElementById("wind-speed");
let windDegree = document.getElementById("wind-degree");
let feelsLike = document.getElementById("feels-like");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let switchbtn = document.getElementById("switch");
let themebtn = document.getElementById("theme");
const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
let date = document.getElementById("date");
let clock = document.getElementById("clock");
const months = ['Jan', 'Feb', 'mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let city = "Istanbul";
let weatherImage = "";

window.addEventListener('load', getApi);

themebtn.addEventListener('click', () => {
    console.log("root");
    if (themebtn.checked) {
        document.documentElement.style.setProperty("--main-bg" , "rgb(54, 54, 54)")
        document.documentElement.style.setProperty("--main-color" , "white")
        document.documentElement.style.setProperty("--bg2" , "rgb(60, 60, 60)")
    } else {
        document.documentElement.style.setProperty("--main-bg" , "rgb(236, 235, 235)")
        document.documentElement.style.setProperty("--main-color" , "rgb(42, 42, 42)")
        document.documentElement.style.setProperty("--bg2" , "rgb(210, 210, 209)")
    }
})

function getApi() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bacb2bf4191872da42c94afbc7b155a5`)
        .then(res => res.json())
        .then(data => {
            locationName.innerText = ' ' + data.name
            temp.innerHTML = `${Math.floor(data.main.temp - 273)}<span>&#8451;</span>`
            weatherImage = data.weather[0].main === "Rain" ? "rain.png" : data.weather[0].main === "Sun" ? "sun.png" : data.weather[0].main === "Clouds" ? "Clouds.png" : "sun1.png"
            weatherName.innerText = data.weather[0].main === "Rain" ? "rainy" : data.weather[0].main === "Sun" ? "suny" : data.weather[0].main === "Clouds" ? "Cloudy" : "sun cloudy"
            weather.innerHTML = `<img src="./image/${weatherImage}" class="main-img" id="weather"/> `
            humidity.innerText = ' ' + Math.floor(data.main.humidity) + '%'
            pressure.innerText = ' ' + Math.floor(data.main.pressure) + 'hPa'
            windSpeed.innerText = ' ' + Math.floor(data.wind.speed) + 'km/h';
            windDegree.innerText = ' ' + Math.floor(data.wind.deg);
            feelsLike.innerHTML = `${Math.floor(data.main.feels_like - 273)}<span>&#8451;</span>`;
            sunrise.innerText = '07:22';
            sunset.innerText = "19:57"

            switchbtn.addEventListener('click', () => {
                if (switchbtn.checked) {
                    temp.innerHTML = ` ${Math.floor((Math.floor(data.main.temp - 273)) * 9 / 5 + 32)}<span>&#8457;</span>`
                } else {
                    temp.innerHTML = `${Math.floor(data.main.temp - 273)}<span>&#8451;</span>`
                }
            })
        })

}

setInterval(() => {
    let now = new Date();

    let hour = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");

    date.innerHTML = `${months[now.getMonth()]} ${now.getDate()}`
    clock.innerHTML = `${hour}:${minutes}`
}, 1000);

btn.addEventListener("click", () => {
    modal.classList.toggle("modal-open")
})