'use strict';

angular.module('ragewarApp')
  .controller('SubscribeCtrl', ['$scope', '$http', function ($scope, $http) {
    function setError() {
      $scope.hasMessage = true;
      $scope.message = 'There was an error, please try again later.';
    }

    $scope.hasMessage = false;
    $scope.submitted = false;
    $scope.subscribe = function() {
      $http.post('/subscribe.php', jQuery.param({name: $scope.user.name, email: $scope.user.email, terms: $scope.user.terms}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
        success(function(data) {
          if (data.error) {
            setError();
            return;
          }

          $scope.hasMessage = true;
          $scope.message = 'Thank you for subscribing.';
          $scope.submitted = true;
        }).
        error(function() {
          setError();
        });
    };
  }]);
