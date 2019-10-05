
var axios=require("axios");
var fs=require("fs");
require('dotenv').config();
var Spotify = require('node-spotify-api');

 function moviefind() {
    const [,, ...args] = process.argv;

      const movie = process.argv.slice(2);


   
    var URL= "http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=trilogy";

axios.get(URL).then(function(response){
    // var jsonData=response.data;
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(JSON.stringify(response.data.Ratings[0], null, 2));
    console.log(JSON.stringify(response.data.Ratings[1], null, 2));
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
    //fs.appendFile("log.txt", movieData);
})}

moviefind();

// * Actors in the movie.


function concertfind() {
//     const [,, ...args] = process.argv;
// //const movie = args.toString();
// const band = process.argv[2];
   
    var URL= "https://api.seatgeek.com/2/events?performers.slug=bob-dylan&client_id=MTg3MjgzNjl8MTU3MDEzMzI3My4wNg";

axios.get(URL).then(function(response){
    
    console.log(JSON.stringify(response.data.events[0].title, null, 10));
    console.log(JSON.stringify(response.data.events[0].datetime_local, null, 10));
    console.log(JSON.stringify(response.data.events[0].venue.name, null, 10));
    console.log(JSON.stringify(response.data.events[0].venue.city, null, 10));
})}

concertfind();


// Venue location




//After trying to code this myself and facing difficulties, I decided
//to use heavily the examples from the node-spotify-api Readme. Also,
//I stopped using Axios because I was not getting satisfactory results. 

function songfind() {


var spotify = new Spotify({
  id: "146cfb3288d84ebb84e80e5b996c5c7a",
  secret: "73a5209fae2044c1ace88b903aeb9e75"
}) ;
 
spotify.search({ type: 'track', query: 'Thriller', limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 

//console.log(JSON.stringify(data, null, 2));
        console.log("Artist: " + "Michael Jackson");
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Spotify URL: " + data.tracks.items[0].preview_url);
        console.log("Album Name:" + data.tracks.items[0].album.name)
	
})};

songfind();
