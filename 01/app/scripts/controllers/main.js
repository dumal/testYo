'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL='http://lorempixel.com/960/450/';
	$scope.setInterval=5000;
	$scope.slides = [
   {
         title:'7 Ways to stay Fit',
         image:baseURL+'sports/',
         text:'Play a sport for 30 minutes a day!'
   },
   {
         title:'Healthly Food',
         image:baseURL+'food/',
         text:'Food that you should be eating!'
   },
   {
         title:'Relaxing Holidays',
         image:baseURL+'nature/',
         text:'10 Locations for Nature Lovers!'
   }

    ];
    // Model for the 3 content blocks
    var baseURL2='http://lorempixel.com/200/200/';
    $scope.content=[
    {
       img:baseURL2+'people',
       title:'About Us',
       summary:'We are good, we are the best out there'
    },
    {
       img:baseURL2+'business',
       title:'Our Services',
       summary:'We offer advice on staying Healthly, what to eat...' +
       'what are the best exercises for you etc.'
    },
    {

       img:baseURL2+'transport',
       title:'Contact Us',
       summary:'#111, Good Health Blvd, Happy Place, Antartica, Zip-432167'
    }
    ];
  });
