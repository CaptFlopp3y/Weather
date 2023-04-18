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
        var date = event.getMonth() + ", " + event.getDate() + ", " + event.getFullYear()
        var lon = data.coord.lon
        var lat = data.coord.lat
        var pic = data.weather[0].icon
        var temp = data.main.temp
        var wind = data.wind.speed
        var hum = data.main.humidity
        var city = data.name
        var html = `
        <div class= "col-12">
        <p>${city}, ${date} </p>
        <p>
        <img src="http://openweathermap.org/img/wn/${pic}.png"
        alt= "Weather Icon" />
        </p>
        <p>Temp: ${temp} </p>
        <p>Wind: ${wind} MPH</p>
        <p>Humidity: ${hum} %</p>
        </div>
        `

        listEl.innerHTML = html
        console.log(data);
    })

    .catch(function (error) {
        console.log(error)
    });

var response = fetch(apiurl2)
    .then(function (response) {
        return response.json();
    })
