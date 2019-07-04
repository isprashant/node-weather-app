let apiKey = '*****************************8'; //Enter api key from openweathermap.com
let city = '**************';  //Enter city input
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


const request = require('request');


request(url, function (err, response, body) {
  if(err){
    console.log('error:', err);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
