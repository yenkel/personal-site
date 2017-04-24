var express = require('express');
var app = express();


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('personal-site'));
app.use(express.static('node_modules'));

app.all('*', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.listen('8000', function() {
    console.log("yo yo yo, on 8000 bro");
});
