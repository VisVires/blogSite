var request = require('request');
var express = require('express');
var app = express();
var hbs = require('express-handlebars').create({defaultLayout:'main'});
var session = require('express-session');
var http = require('http');
var https = require('https');
var fs = require('fs');
var path = require('path');
//var util = request('util');
var router = express.Router();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);
app.use(express.static('public'));

app.get('/', function (req,res) {
    var context = {'active': {'aboutme': true}};
	res.render('aboutme', context);
});

//tech blog page
app.get('/tech/:techBlogId?', function (req,res) {
    var blogId = req.params.techBlogId;
    var content;
    //console.log(content);
    //parse JSON file
    fs.readFile('public/tech_blog/tposts.json',  'utf8', function(err, months){
        if(err) throw err;
        posts = JSON.parse(months);
        if (!blogId || blogId == 'January2018'){
            fs.readFile(path.join(__dirname,'public/tech_blog/tblog_0118.html'), 'utf8',function (err,data) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                content = data;
                //console.log(content);
                var context = {'curr': content, 'active': {'tech': true}, 'month': posts.posts.post};
                res.render('tech', context);
            });
        }
        else if(blogId == 'December2017'){
            fs.readFile(path.join(__dirname,'public/tech_blog/tblog_1217.html'), 'utf8',function (err,data) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                content = data;
                //console.log(content);
                var context = {'curr': content, 'active': {'tech': true}, 'month': posts.posts.post};
                res.render('tech', context);
            });
        }
        else if(blogId == 'November2017'){
            fs.readFile(path.join(__dirname,'public/tech_blog/tblog_1117.html'), 'utf8',function (err,data) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                content = data;
                //console.log(content);
                var context = {'curr': content, 'active': {'tech': true}, 'month': posts.posts.post};
                res.render('tech', context);
            });
        }
    });
});

//projects 
app.get('/projects', function (req,res) {
    var context = {'active': {'projects': true}};
	res.render('projects', context);
});

//go to resume page
app.get('/resume', function (req,res) {
    var context = {'active': {'resume': true}};
	res.render('resume', context);
});

//download resume
app.get('/download', function (req, res) {
    var file = __dirname + '/public/resume/williamgeorge_cv.pdf';
    res.download(file);
})

//go to fitness page
app.get('/fitness/:fitBlogId?', function (req,res) {
    var fitBlog = req.params.fitBlogId;
    if(!fitBlog){
    	var content;
        //console.log(content);
        fs.readFile('public/fitness_blog/fposts.json',  'utf8', function(err, months){
            if(err) throw err;
            posts = JSON.parse(months);

            fs.readFile(path.join(__dirname,'public/fitness_blog/fblog1115.html'), 'utf8',function (err,data) {
                if (err) {
                    console.log(err);
                    process.exit(1);
        	    }
                content = data;
                var context = {'curr': content, 'active': {'fitness': true}, 'month': posts.posts};
                res.render('fitness', context);
            });
        });
    }
});

//go to photography page
app.get('/photography', function (req,res) {
    var obj;
    fs.readFile('public/photography/photography.json', 'utf8', function(err, data){
        if(err) throw err;
        obj = JSON.parse(data);
        //console.log(obj.photos);
        var context = {'active': {'photography': true}, 'photo': obj.photos};
        res.render('photography', context);
    });
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


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});


