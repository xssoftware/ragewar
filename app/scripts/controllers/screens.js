'use strict';

angular.module('ragewarApp')
  .controller('ScreensCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function() {
      Shadowbox.setup('#screenshots a', {
        gallery: 'screenshots',
        player: 'img'
      });
    });
  });
