(function() {
  'use strict';

  angular.module('ossp')
    .factory('Votes', function ($resource) {
      return $resource('/api/v1/votes/:voteId', {
        voteId: '@id'
      }, {
        update: {
          method: 'PUT'
        }
      });
    });
})();
