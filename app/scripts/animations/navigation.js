'use strict';

angular.module('ragewarApp').animation('.navigation-animation', function() {
  return {
    enter : function(element, done) {
      element.css({opacity: 0});
      jQuery(element).animate({
        opacity: 1
      }, done);

      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      };
    },
    leave : function(element) {
      element.hide();
      return;
    },
  };
});
