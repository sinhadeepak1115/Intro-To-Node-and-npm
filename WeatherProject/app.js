const { response } = require('express');
const express = require('express');
const app = express();

const http = require('http');

    app.get('/', function (req, res){
        res.sendFile(__dirname + "/index.html")        
    })
    app.post("/", function(req, res){
        console.log("Post request recived")
    })
// const City = "Patna";
// const appid = "31f2772c8481253024098bda0bad3b76";
// const units = "metric";

// const url = "http://api.openweathermap.org/data/2.5/weather?q="+ City +"&appid=" +appid +"&units=" + units;
// http.get(url, function(responce) {
//     console.log(responce.statusCode);
//     responce.on('data', function(data) {
//         var weatherData = JSON.parse(data);
//         console.log(weatherData);
//         const weatherTemp = weatherData.main.temp;
//         console.log(weatherTemp);
//         const weatherFeelsLike = weatherData.weather[0].description;
//         console.log(weatherFeelsLike);
//         const iconId = weatherData.weather[0].icon;
//         console.log(iconId);
//         const urlWeatherIcon  = "http://openweathermap.org/img/wn/"+ iconId +"@2x.png"
//         res.write("<h1>The Temperature in "+ City +" is "+ weatherTemp +" degrees celsius</h1>");
//         res.write("<h3>It appera to be "+ weatherFeelsLike + " outside</h3>")
//         res.write("<img src=" + urlWeatherIcon+ ">");
//         res.send();
//     })
// })

app.listen(3000, function () {
    console.log("Server is running on port 3000 plz check.")
})