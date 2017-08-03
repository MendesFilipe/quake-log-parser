'use strict';
var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 1337;

function read(file, callback) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        callback(data);
    });
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    read('games.log', function (data) {
        res.render('index', { title: 'Quake log parser - Wunderman', parserLog: data });
    });
});



app.listen(port);