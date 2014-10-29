'use strict';
var app = angular.module('CFBTweet');
/**
 * @ngdoc function
 * @name clientApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the clientApp
 */
app.controller('TeamsCtrl', function ($scope, teamData) {
	
	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.team = teamData;
    
});
