var apiurl = "https://api.openweathermap.org/data/2.5/forecast?q=salt lake city&appid=55005b98484cc48d65537d2a2b526975"

var response = fetch(apiurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

