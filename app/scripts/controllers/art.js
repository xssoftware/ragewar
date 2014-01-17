'use strict';

angular.module('ragewarApp')
  .controller('ArtCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function() {
      Shadowbox.setup("#concepts a", {
        gallery: "concepts",
        player: 'img'
      });

      Shadowbox.setup("#characters a", {
        gallery: "characters",
        player: 'img'
      });

    });
});
