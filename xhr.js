'use strict'

console.log("First line in JavaScript file");
console.log(performance.now());

function executeThisCodeAfterFileIsLoaded(e) {
  console.log("executeThisCodeAfterFileIsLoaded");
  console.log(performance.now());

  var data = JSON.parse(e.target.responseText);

  console.log("data", data);

  var contentEl = document.getElementById('all-my-songs');
  console.log("contentEl", contentEl);

  var songData = "";
  var currentSong;

  for (var i = 0; i < data.songs.length; i++) {
    currentSong = data.songs[i]


    songData += ` <div class="song-block">
                    <h1>${currentSong.title}</h1>
                    <div class='artist'>Performed by ${currentSong.artist} </div>
                    <div class='album'>On the Album ${currentSong.album}</div>
                  </div>
                  `
  }

  // var string = "my favorite animal is " + myAnimal + "today!"
  // var string = `my favorite animal is ${myAnimal} today!`

  console.log("songData", songData);
  contentEl.innerHTML = songData;
}

function executeThisCodeIfXHRFails(xhrEvent) {
  console.log("An error occured");
}

function executeThisCodeWhenChunksArrive(xhrEvent) {
  if (xhrEvent.lengthComputable) {
    var percentComplete = xhrEvent.loaded / xhrEvent.total;
    console.log(percentComplete)
  }
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
myRequest.open("GET", "songs.json");
myRequest.send();

console.log("Last line in JavaScript file");
console.log(performance.now());