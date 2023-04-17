var apiurl = "https://api.openweathermap.org/data/2.5/forecast?q=salt lake city&appid=55005b98484cc48d65537d2a2b526975"
var listEl = document.getElementById("myData")

var response = fetch(apiurl)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        var docArray = data.list;
        for (var i = 0; i < docArray.length; i++) {
            var listItem = document.createElement(`li`);
            listItem.textContent = docArray[i].main;
            listEl.appendChild(listItem);
        }
        console.log(data.list);
    })

    .catch(function (error) {
        console.log(error)
    });

