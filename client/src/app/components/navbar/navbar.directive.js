(function() {
  'use strict';

  angular
    .module('ossp')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          // creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $scope, $location, $rootScope, $auth) {
      var vm = this;

      vm.user = $rootScope.user;
      console.log('from nav:', $rootScope.user);

      vm.signOut = function() {
        console.log('signOut func');
        $auth.signOut().then(function(resp) {
          console.log('sign out success');
          $location.path('/pitches');
        })["catch"](function(resp) {
          console.log('logout error');
        });
      };

      vm.isActive = function(route) {
        if ($location.path() === route) {
          return true
        }
        else {
          return false
        }
      }

    }
  }

})();
