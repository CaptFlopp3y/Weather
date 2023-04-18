var apiurl = "https://api.openweathermap.org/data/2.5/weather?q=salt lake city&appid=55005b98484cc48d65537d2a2b526975"
var apiurl2 = "https://api.openweathermap.org/data/2.5/onecall?appid=16da2c71dd8c2c76dfce15f0f75a5dea&lat=40.7608&lon=-111.8911"
var listEl = document.getElementById("myData")
var listE2 = document.getElementById("forecast")


var response = fetch(apiurl)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        const event = new Date();
        var date = (event.getMonth() + 1) + "/ " + event.getDate() + "/ " + event.getFullYear()
        var lon = data.coord.lon
        var lat = data.coord.lat
        myForecast(lon, lat)
        var pic = data.weather[0].icon
        var temp = data.main.temp
        var wind = data.wind.speed
        var hum = data.main.humidity
        var city = data.name
        var html = `
        <div class= "col-12">
        <p>${city}, (${date}) </p>
        <p>
        <img src="http://openweathermap.org/img/wn/${pic}.png"
        alt= "Weather Icon" />
        </p>
        <p>Temp: ${temp} </p>
        <p>Wind: ${wind} MPH</p>
        <p>Humidity: ${hum}%</p>
        </div>
        `

        listEl.innerHTML = html
    })

    .catch(function (error) {
        console.log(error)
    });

function myForecast(longitude, latitude) {
    let apikeycode = `https://api.openweathermap.org/data/2.5/onecall?appid=16da2c71dd8c2c76dfce15f0f75a5dea&lat=${latitude}&lon=${longitude}`
    var response = fetch(apikeycode)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            listE2.innerHTML = ""
            for (let i = 1; i < 6; i++) {
                var day = data.daily[i]
                const event = new Date(day.dt * 1000);
                var date = (event.getMonth() + 1) + "/ " + event.getDate() + "/ " + event.getFullYear()
                let temp = day.temp.day
                let wind = day.wind_speed
                let hum = day.humidity
                let pic = day.weather[0].icon
                let html = `
                <div class = "day">
                <p>${date}</p>
                <p>
                <img src="http://openweathermap.org/img/wn/${pic}.png"
                alt= "Weather Icon" />
                </p>
                <p>Temp: ${temp} </p>
                 <p>Wind: ${wind} MPH</p>
                 <p>Humidity: ${hum}%</p>
                </div>
            `
                var forecastCard = document.createElement("div")
                forecastCard.innerHTML = html
                listE2.appendChild(forecastCard)
            }
            console.log(data);
        })

};


