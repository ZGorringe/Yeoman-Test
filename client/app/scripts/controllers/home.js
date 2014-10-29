'use strict';
var app = angular.module('CFBTweet');
/**
 * @ngdoc function
 * @name clientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */
app.controller('HomeCtrl', function ($scope, teamService) {
    
	// $scope.getTeamData = function () {
	// 	teamService.statusesHomeTimeLine() 
	// 		.then(function (data) {
	// 			$scope.teamData = (data);
	// 	});
	// };

	$scope.hello = function () {
		teamService.sayHi();
	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

});
