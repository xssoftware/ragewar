'use strict';

angular.module('ragewarApp')
  .controller('SubscribeCtrl', function ($scope) {
    $scope.hasMessage = false;
    $scope.submitted = false;
    $scope.subscribe = function() {
      $scope.hasMessage = true;
      $scope.submitted = true;
    };
});
