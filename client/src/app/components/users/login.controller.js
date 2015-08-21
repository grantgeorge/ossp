'use strict';

/**
 * @ngdoc function
 * @name ossp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the ossp
 */
angular.module('ossp')
  .controller('LoginController', ['$scope', function ($scope) {
    console.log('login ctrl');
    $scope.$on('auth:login-error', function(ev, reason) {
      console.log('Event: auth:login-error from LoginController $scope');
      $scope.errors = reason.errors;
    });
  }]);
