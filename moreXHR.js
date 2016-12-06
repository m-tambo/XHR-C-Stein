'use strict'

console.log("here I am!!!!!!!!!!!!!!!!!!!!!!");

var newReqest = new XMLHttpRequest()

function showMeTheWeather(monkeyButt) {
  var data = JSON.parse(monkeyButt.target.responseText)
  console.log("monkeyButt", monkeyButt);
  var temp = data.main.temp
  console.log("temp", temp);
  document.getElementById('currentWeather').innerHTML = temp
}

newReqest.addEventListener("load", showMeTheWeather)
newReqest.open("GET", 
  "http://api.openweathermap.org/data/2.5/weather?zip=31322&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137" )
newReqest.send()

var anotherRequest = new XMLHttpRequest()
anotherRequest.addEventListener("load", showMeTheWeather)
anotherRequest.open("GET", 
  "http://api.openweathermap.org/data/2.5/weather?zip=28226&units=imperial&APPID=1b7f1f7355165ced17dbbeaf8d5ed137" )
anotherRequest.send()







