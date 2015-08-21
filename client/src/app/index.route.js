(function() {
  'use strict';

  angular
    .module('ossp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // })
      .state('login', {
        url: '/login',
        views: {
          nav: {},
          content: {
            templateUrl: 'app/components/users/login.html',
            controller: 'LoginController'
          },
          footer: {}
        }
      })
      .state('register', {
        url: '/register',
        views: {
          nav: {},
          content: {
            templateUrl: 'app/components/users/register.html',
            controller: 'RegisterController'
          },
          footer: {}
        }
      })
      .state('pitches', {
        url: '/pitches',
        views: {
          nav: {
            template: '<acme-navbar/>'
          },
          content: {
            templateUrl: 'app/components/pitches/pitches.html',
            controller: 'PitchesController'
          },
          footer: {
            template: '<ossp-footer />'
          }
        }
        // resolve: {
        //   auth: ['$auth', function($auth) {
        //     console.log('validating user for pitch route');
        //     return $auth.validateUser();
        //   }]
        // }
      })
      .state('submit', {
        url: '/submit',
        views: {
          nav: {
            template: '<acme-navbar/>'
          },
          content: {
            templateUrl: 'app/components/pitches/submit.html',
            controller: 'PitchesSubmitController',
          },
          footer: {
            template: '<ossp-footer />'
          }
        },
        resolve: {
          auth: ['$auth', function($auth) {
            console.log('validating user for submit route');
            return $auth.validateUser();
          }]
        }
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/components/settings/settings.html',
        controller: 'SettingsController',
        resolve: {
          auth: ['$auth', function($auth) {
            console.log('validating user for settings route');
            return $auth.validateUser();
          }]
        }
      });

    $urlRouterProvider.otherwise('/pitches');

    $locationProvider.html5Mode(true);
  }

})();
