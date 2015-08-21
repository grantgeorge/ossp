(function() {
  'use strict';

  angular
    .module('ossp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $location) {

    $log.debug('runBlock end');

    $rootScope.$on('auth:login-success', function (ev, user) {
      console.log('Event: auth:login-success from runBlock');
      $rootScope.user = user;
      $location.path('/pitches');
    });

    $rootScope.$on('auth:validation-success', function (ev, user) {
      $rootScope.user = user;
      console.log('Event: auth:validation-success from runBlock');
    });

    $rootScope.$on('auth:logout-success', function() {
      console.log('Event: auth:logout-success from runBlock');
      $rootScope.user = null;
      $location.path('/pitches');
    });
  }

})();
