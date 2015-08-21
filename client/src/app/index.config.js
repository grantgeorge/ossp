(function() {
  'use strict';

  angular
    .module('ossp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    $authProvider.configure({
      apiUrl: "/api/v1"
    });
  }

})();
