'use strict';

/**
 * @ngdoc function
 * @name ossp.controller:RegisterController
 * @description
 * # RegisterController
 * Controller of the ossp
 */
angular.module('ossp')
  .controller('RegisterController', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.handleRegBtnClick = function() {
      console.log($scope.registrationForm);
      $scope.registrationForm.password_confirmation = $scope.registrationForm.password;
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password,
            nickname: $scope.registrationForm.nickname
          });
        });
    };

    $scope.$on('auth:registration-email-error', function(ev, reason) {

      console.log(reason);

      $scope.errors = reason.errors.full_messages;
    });

  }]);
