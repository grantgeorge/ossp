(function() {
  'use strict';

  angular.module('ossp')
    .controller('PitchesController', function ($scope, $rootScope, Pitches, Votes) {

      $scope.submitPitch = false;

      $scope.newPitch = new Pitches();

      console.log($scope.newPitch);

      $scope.errors = [];

      $scope.sortPredicate = 'Latest';

      $scope.currentPage = 1;

      $scope.createPitch = function () {
        $scope.newPitch.user_id = $rootScope.user.id;
        console.log($scope.newPitch);
        Pitches.save({ pitch: $scope.newPitch }, function (res) {
          console.log('success!');
          console.log(res);
        }, function (err) {
          console.log(err);
        });
      };

      $scope.reloadPitches = function (sortPredicate, page) {
        Pitches.query({sort_by: sortPredicate},function (res) {
          $scope.pitches = res;
          console.log($scope.pitches);
          if(sortPredicate === 'latest') {
            $scope.sortPredicate = 'Latest';
          }
          else {
            $scope.sortPredicate = 'Most Popular';
          }
        });
      };

      $scope.loadMore = function () {

        $scope.currentPage += 1;

        var sort;

        if($scope.sortPredicate === 'Latest') {
          sort = 'latest';
        }
        else {
          sort = 'rating';
        }

        Pitches.query({sort_by: sort, page: $scope.currentPage},function (res) {
          $scope.pitches = $scope.pitches.concat(res);
          console.log($scope.pitches);
        });
      };

      Pitches.query(function (res) {
        $scope.pitches = res;
        console.log($scope.pitches);
      });

      $scope.upVoted = function (pitch) {
        if (pitch.user_up_voted === true) {
          return true;
        }
        else {
          return false;
        }
      };

      $scope.downVoted = function (pitch) {
        if (pitch.user_down_voted === true) {
          return true;
        }
        else {
          return false;
        }
      };

      $scope.upVote = function (pitch) {

        if (pitch.user_down_voted || pitch.user_up_voted) {
          console.log('user already voted!');
          return false;
        }

        if(!$rootScope.user.uid) {
          $scope.errors.push('You must be logged in to do that!');
          return false;
        }

        Votes.save({ vote: {
          pitch_id: pitch.id,
          up: true,
          user_id: $rootScope.user.id } },
          function (res) {
            console.log(res);
            pitch.votes.push(res);
            pitch.user_up_voted = true;
            pitch.up_vote_count += 1;
        }, function (err) {
          console.log(err);
        });
      };

      $scope.downVote = function (pitch) {

        if (pitch.user_down_voted || pitch.user_up_voted) {
          console.log('user already voted!');
          return false;
        }

        if(!$rootScope.user.uid) {
          $scope.errors.push('You must be logged in to do that!');
          return false;
        }

        Votes.save({ vote: {
          pitch_id: pitch.id,
          up: false,
          user_id: $rootScope.user.id } },
          function (res) {
            console.log(res);
            pitch.votes.push(res);
            pitch.user_down_voted = true;
            pitch.down_vote_count += 1;
        }, function (err) {
          console.log(err);
        });
      };

      $scope.clickSubmitPitch = function () {
        if(!$rootScope.user.uid) {
          $scope.errors.push('You must be logged in to do that!');
        }
        else {
          $scope.submitPitch = true;
        }
      };

    });
})();
