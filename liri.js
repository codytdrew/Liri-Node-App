//Code added to read and set any environment variables with the dotenv package
require("dotenv").config();

//This variable serves to store the imported keys.js file
var keys = require("./keys.js");
var spotify = new spotify(keys.spotify);