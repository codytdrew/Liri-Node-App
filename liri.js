//Code added to read and set any environment variables with the dotenv package
require("dotenv").config();

//This variable serves to store the imported keys.js file
var keys = require("./keys.js");

//Variable for the method that will request for tracks 
var Spotify = require('node-spotify-api');

//Creates a spotify object that can query the spotify API
var spotify = new Spotify(keys.spotify);


//Take in the command line arguments.  Cuts node and file name off of playback
const userArguments = process.argv.slice(2).join(" ");

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data.tracks.items[0]);
});  

switch (userArguments) {
  case "concert-this":
    concert();
    break;
  
  case "spotify-this-song":
    songId();
    break;

  case "movie-this":
    movieFinder();
    break;

  case "do-what-it-says":
    executeAction();
}

function concert ()
 