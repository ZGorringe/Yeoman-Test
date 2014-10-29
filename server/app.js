var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');
var Twitter = require('node-twitter');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// var twitterRestClient = new Twitter.RestClient(
//     'o7vPlD0BBhqi6uz9lEgcuzVd2',
//     'PqzCq30D3M9KAzIYocCLGOybk9VqDRxhAvsiAKVDp9aj0zUcX0',
//     '155258553-mljzzG0HpsqxZSNr1X0dADsOtLc8nX7OOhdeVjMI',
//     'r8HC9TsbYFynt5Ow2NIYMYvQD0JLO4cW6r7gkT5qdzcTs'
// );

// twitterRestClient.statusesHomeTimeline({}, function(error, result) {
//     if (error)
//     {
//         console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
//     }
//     if (result)
//     {
//         console.log(result);
//     }
// });

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Development Settings
 */
if (app.get('env') === 'development') {
    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


module.exports = app;
