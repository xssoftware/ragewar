'use strict';

angular.module('ragewarApp')
  .controller('MediaCtrl', function ($scope) {
    $scope.showVideo = false;
    $scope.$on('$destroy', function() {
      $scope.showVideo = true;
    });
});
