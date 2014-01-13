'use strict';

angular.module('ragewarApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/game', {
        templateUrl: '/views/game.html',
        controller: 'GameCtrl'
      })
      .when('/game/build', {
        templateUrl: '/views/build.html',
        controller: 'BuildCtrl'
      })
      .when('/game/battle', {
        templateUrl: '/views/battle.html',
        controller: 'BattleCtrl'
      })
      .when('/game/trade', {
        templateUrl: '/views/trade.html',
        controller: 'TradeCtrl'
      })
      .when('/game/discovery', {
        templateUrl: '/views/discovery.html',
        controller: 'DiscoveryCtrl'
      })
      .when('/game/campaign', {
        templateUrl: '/views/campaign.html',
        controller: 'CampaignCtrl'
      })
      .when('/game/social', {
        templateUrl: '/views/social.html',
        controller: 'SocialCtrl'
      })
      .when('/media', {
        templateUrl: '/views/media.html',
        controller: 'MediaCtrl'
      })
      .when('/media/screens', {
        templateUrl: '/views/screens.html',
        controller: 'ScreensCtrl'
      })
      .when('/media/art', {
        templateUrl: '/views/art.html',
        controller: 'ArtCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about/portfolio', {
        templateUrl: '/views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/about/team', {
        templateUrl: '/views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/subscribe', {
        templateUrl: '/views/subscribe.html',
        controller: 'SubscribeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $location, $route) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      var routes = {
        'GameCtrl': [
          { url: '/game', name: 'Home' },
          { url: '/game/build', name: 'Build' },
          { url: '/game/battle', name: 'Battle' },
          { url: '/game/trade', name: 'Trade' },
          { url: '/game/discovery', name: 'Discovery' },
          { url: '/game/campaign', name: 'Campaign' },
          { url: '/game/social', name: 'Social' }
        ],
        'MediaCtrl': [
          { url: '/media', name: 'Videos' },
          { url: '/media/screens', name: 'Screenshots' },
          { url: '/media/art', name: 'Art' }
        ],
        'AboutCtrl': [
          { url: '/about', name: 'Company' },
          { url: '/about/portfolio', name: 'Portfolio' },
          { url: '/about/team', name: 'Team' }
        ],
        'SubscribeCtrl': [],
        'IndexCtrl': []
      };

      $rootScope.currentPath = $location.path();

      for (var controller in routes) {
        if (controller === current.controller) {
          $rootScope.links = routes[controller];
          return;
        }
      }
    });

    $rootScope.isPageActive = function(url) {
      if ($rootScope.currentPath === url) {
        return true;
      }

      return false;
    };

    $rootScope.links = [];
  });
