(function() {
  'use strict';

  angular.module('ossp')
    .factory('Pitches', function ($resource) {
      return $resource('/api/v1/pitches/:pitchId', {
        pitchId: '@id'
      }, {
        update: {
          method: 'PUT'
        }
      });
    });
})();
