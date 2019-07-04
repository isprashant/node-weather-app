// Input using inbuild stdin

let apiKey = 'b9dea04843fb5c6eb1574ec1db95c392';
let city = 'bangalore';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


const request = require('request');
// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Enter city name to get temperature: ");

// When user input data and click enter key.
standard_input.on('data', function (data) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=${apiKey}`;
    request(url, function (err, response, body) {
        if(err){
          console.log('error:', err);
        } else {
          let weather = JSON.parse(body)
          let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          console.log(message);
          process.exit();
        }
      });
});
