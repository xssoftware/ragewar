'use strict';

angular.module('ragewarApp')
  .controller('MediaCtrl', ['$scope', function ($scope) {
    $scope.showVideo = false;
    $scope.$on('$destroy', function() {
      $scope.showVideo = true;
    });
  }]);
