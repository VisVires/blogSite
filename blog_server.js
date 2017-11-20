var request = require('request');
var express = require('express');
var app = express();
var hbs = require('express-handlebars').create({defaultLayout:'main'});
var session = require('express-session');
var http = require('http');
var fs = require('fs');
var path = require('path');
//var util = request('util');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(express.static('public'));

app.get('/', function (req,res) {
    var context = {'active': {'aboutme': true}};
	res.render('aboutme', context);
});

app.get('/tech', function (req,res) {
	var content;
    //console.log(content);
    fs.readFile(path.join(__dirname,"public/tech_blog","tblog1115.html"), 'utf8',function (err,data) {
        if (err) {
            console.log(err);
            process.exit(1);
    	}
        content = data;
        //console.log(content);
        var context = {'curr': content, 'active': {'tech': true}};
        res.render('tech', context);
     });
});

app.get('/projects', function (req,res) {
    var context = {'active': {'projects': true}};
	res.render('projects', context);
});

//go to resume page
app.get('/resume', function (req,res) {
    var context = {'active': {'resume': true}};
	res.render('resume', context);
});

//go to fitness page
app.get('/fitness', function (req,res) {
	var content;
    //console.log(content);
    fs.readFile(path.join(__dirname,"public/fitness_blog","fblog1115.html"), 'utf8',function (err,data) {
        if (err) {
            console.log(err);
            process.exit(1);
    	}
        content = data;
        //console.log(content);
        var context = {'curr': content, 'active': {'fitness': true}};
        res.render('fitness', context);
    });
});

//go to photography page
app.get('/photography', function (req,res) {
    var context = {'active': {'photography': true}};
	res.render('photography', context);
});

//check for 404 error
app.use(function (req,res) {
    res.status(404);
    res.render('404');
});

//check for 500 error
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

//output affirmative to node console
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

