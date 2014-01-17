angular.module('ragewar.scroll', []).directive('rgScroll', [function() {
  'use strict';
  return {
    restrict: 'AE',
    transclude: true,
    template: '<div><div ng-transclude></div></div>',
    replace: true,
    link: function($scope, $elem) {
      $elem.perfectScrollbar({
        wheelSpeed: 50,
        wheelPropagation: false,
        minScrollbarLength: false
      });
    }
  };
}]);
