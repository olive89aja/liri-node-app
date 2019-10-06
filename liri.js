var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
require('dotenv').config();
var Spotify = require('node-spotify-api');


//This switch case is inspired by liri apps written by Meggin Kearney and Stefanie Ding available on Github.
//However I am unable to make it work for now. 
// var command = process.argv[2];

// switch(command) {
//   case "movie-this":
//   moviefind();
//   break;

//   case "concert-this":
//   concertfind();
//   break;

//   case "spotify-this-song":
//      songfind();
//   break;

//   default:
//     console.log("Enter command : movie-this, concert-this, spotify-this-song")
//   break;
//   }



 function moviefind() {
    const [,, ...args] = process.argv;

      const movie = process.argv.slice(2);

    var URL= "http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey="+keys.omdb.apikey;

axios.get(URL).then(function(response){
    
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(JSON.stringify(response.data.Ratings[0], null, 2));
    console.log(JSON.stringify(response.data.Ratings[1], null, 2));
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response. data.Plot);
    console.log(response.data.Actors);
  
})}
moviefind();

function concertfind() {

    var URL= "https://api.seatgeek.com/2/events?performers.slug=bob-dylan&client_id="+keys.seatgeek.client_id;

axios.get(URL).then(function(response){
    
    console.log(JSON.stringify(response.data.events[0].title, null, 10));
    console.log(JSON.stringify(response.data.events[0].datetime_local, null, 10));
    console.log(JSON.stringify(response.data.events[0].venue.name, null, 10));
    console.log(JSON.stringify(response.data.events[0].venue.city, null, 10));
})}
concertfind();

//After trying to code this myself and facing difficulties, I decided
//to use heavily the examples from the node-spotify-api Readme. Also,
//I stopped using Axios because I was not getting satisfactory results. 

function songfind() {

var spotify = new Spotify(
  keys.spotify
);
 var songTitle = process.argv.slice(2);
spotify.search({ type: 'track', query: songTitle, limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

        // console.log("Artist: " + "");
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Spotify URL: " + data.tracks.items[0].preview_url);
        console.log("Album Name:" + data.tracks.items[0].album.name)
	
})};

songfind();


