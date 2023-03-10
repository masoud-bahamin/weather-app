
window.addEventListener('load', getApi)

let city = "Istanbul"

function getApi() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bacb2bf4191872da42c94afbc7b155a5
    `).then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("location").innerText = ' ' + data.name
            document.getElementById("temp").innerHTML = `${Math.floor(data.main.temp - 273)}<span>&#8451;</span>`
            let img = ""
            img = data.weather[0].main === "Rain" ? "rain.png" : data.weather[0].main === "Sun" ? "sun.png" : data.weather[0].main === "Clouds" ? "Clouds.png" : "sun1.png"
            document.getElementById("weather-name").innerText = data.weather[0].main === "Rain" ? "rainy" : data.weather[0].main === "Sun" ? "suny" : data.weather[0].main === "Clouds" ? "Cloudy" : "sun cloudy"
            document.getElementById("weather").innerHTML = `<img src="./image/${img}" class="main-img" id="weather"/> `


            document.getElementById("humidity").innerText = ' ' + Math.floor(data.main.humidity) + '%'
            document.getElementById("pressure").innerText = ' ' + Math.floor(data.main.pressure) + 'hPa'
            document.getElementById("wind-speed").innerText = ' ' + Math.floor(data.wind.speed) + 'km/h';
            document.getElementById("wind-degree").innerText = ' ' + Math.floor(data.wind.deg);
            document.getElementById("feels-like").innerHTML = `${Math.floor(data.main.feels_like - 273)}<span>&#8451;</span>`;
            document.getElementById("sunrise").innerText = '07:22';
            document.getElementById("sunset").innerText = "19:57"
            let switchbtn = document.getElementById("switch");
            switchbtn.addEventListener('click', () => {
                if (switchbtn.checked) {
                    document.getElementById("temp").innerHTML = ` ${Math.floor((Math.floor(data.main.temp - 273)) * 9 / 5 + 32)}<span>&#8457;</span>`
                } else {
                    document.getElementById("temp").innerText = ' ' + Math.floor(data.main.temp - 273) + "C"
                }

            })
        })

    let now = new Date();
    let time = now.getHours();

    const months = ['Jan', 'Feb', 'mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let hour = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");

    document.getElementById("date").innerHTML = `${months[now.getMonth() - 1]} ${now.getDate()}`
    document.getElementById("clock").innerHTML = `${hour}:${minutes}`

}

const modal = document.getElementById("modal")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    modal.classList.toggle("modal-open")
})