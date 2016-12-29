var express = require('express')
var speech = require('./recognize')
var app = express()

var filename = './resources/audio.raw';

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/sync', function (req, res){
 // res.send("Transcripting... Please wait.");
  speech.syncRecognize(filename, function(data){
  	console.log("Transcription", transcription);
  });
})

app.get('/stream', function (req, res) {
 // res.send("Transcripting... Please wait.");
  speech.streamingRecognize(filename, function(data){
  	res.send(`Transcsiption ${data}`);
  	//console.log("Transcription", transcription);
  });
})

/*app.get('/async', function (req, res) {
  res.send("Transcripting... Please wait.");
  var transcription = speech.syncRecognize(filename, function(data){
  	res.send(`Transcription ${data}`);
  	console.log("Transcription", transcription);
  });
})*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log(speech);
})