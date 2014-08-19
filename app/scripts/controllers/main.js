'use strict';

/**
 * @ngdoc function
 * @name secondAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the secondAngularAppApp
 */
angular.module('secondAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
