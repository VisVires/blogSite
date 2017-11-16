var request = require('request');
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var session = require('express-session');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000)

app.use(express.static('public'));

app.get('/', function (req,res) {
	res.render('home');
});

app.get('/tech', function (req,res) {
	res.render('tech');
});

app.get('/projects', function (req,res) {
	res.render('projects');
});

//go to resume page
app.get('/resume', function (req,res) {
	res.render('resume');
});

//go to fitness page
app.get('/fitness', function (req,res) {
	res.render('fitness');
});

//go to photography page
app.get('/photography', function (req,res) {
	res.render('photography');
});

//go to contact page
app.get('/contact', function (req,res) {
	res.render('contact');
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

