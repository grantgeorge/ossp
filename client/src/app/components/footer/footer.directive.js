(function() {
  'use strict';

  angular
    .module('ossp')
    .directive('osspFooter', osspFooter);

  /** @ngInject */
  function osspFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController(moment, $scope) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      $scope.$on('auth:validation-success', function() {
        console.log('validation-success from nav');
        vm.loggedIn = true;
      });
    }
  }

})();
