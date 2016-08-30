// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
  console.log(__dirname);
})

// Gallery View Route
// Create an artworks array in the server code. Each artwork will be an
 // object with a title key, an artist key, and a description key.
var artist1 = {
  title: "Lemonade" ,
  artist: "Beyonce",
  description: "boyBye"
}
var artist2 = {
  title: "TLOP" ,
  artist: "Ye",
  description: "season1"
}
var artworks = [artist1, artist2];



// The Number Guessing Game


// Gallery
app.get("/theart", function(req, res){
  res.json(artworks);

})

// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
