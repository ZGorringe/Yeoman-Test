'use strict';
var app = angular.module('CFBTweet');

/**
 * @ngdoc service
 * @name clientApp.teamService
 * @description
 * # teamService
 * Service in the clientApp.
 */
app.service('teamService', function teamService($q) {

	var Twitter = require('node-twitter');

	var twitterRestClient = new Twitter.RestClient(
    'o7vPlD0BBhqi6uz9lEgcuzVd2',
    'PqzCq30D3M9KAzIYocCLGOybk9VqDRxhAvsiAKVDp9aj0zUcX0',
    '155258553-mljzzG0HpsqxZSNr1X0dADsOtLc8nX7OOhdeVjMI',
    'r8HC9TsbYFynt5Ow2NIYMYvQD0JLO4cW6r7gkT5qdzcTs'
	);

	twitterRestClient.statusesHomeTimeline({}, function(error, result) {
		var deferred = $q.defer();
	    if (error)
	    {
	        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
	    }
	    if (result)
	    {
	        console.log(result);
	    }
	    return deferred.promise;
	});


	this.sayHi = function () {
		console.log('Hi');
	};

});
