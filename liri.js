//Code added to read and set any environment variables with the dotenv package
require("dotenv").config();

//This variable serves to store the imported keys.js file
var keys = require("./keys.js");

//Variable for the method that will request for tracks 
var Spotify = require('node-spotify-api');

// Creates a spotify object that can query the spotify API
var spotify = new Spotify(keys.spotify);

// Grab axios package
var axios = require("axios");

//Take in the command line arguments.  Cuts node and file name off of playback
const userArguments = process.argv.slice(2);
const searchType = userArguments[0];
const searchTerm = userArguments.slice(1).join("*");


switch (searchType) {
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
    break;
}

// When we call the "concert" function
function concert() {
  axios
    .get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

// When we call the "songId" function, we will show the song's Artist, Name, A preview link from spotify, and Album
function songId() {
  spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}

