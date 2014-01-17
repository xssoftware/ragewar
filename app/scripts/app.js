'use strict';

angular.module('ragewarApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'ragewar.scroll'
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

    var routes = {
      'GameCtrl': [
        { url: '/game', name: 'Home', className: 'home' },
        { url: '/game/build', name: 'Build', className: 'build' },
        { url: '/game/battle', name: 'Battle', className: 'battle' },
        { url: '/game/trade', name: 'Trade', className: 'trade' },
        { url: '/game/discovery', name: 'Discovery', className: 'discovery' },
        { url: '/game/campaign', name: 'Campaign', className: 'campaign' },
        { url: '/game/social', name: 'Social', className: 'social'}
      ],
      'MediaCtrl': [
        { url: '/media', name: 'Videos', className: 'videos' },
        { url: '/media/screens', name: 'Screenshots', className: 'screens' },
        { url: '/media/art', name: 'Art', className: 'art' }
      ],
      'AboutCtrl': [
        { url: '/about', name: 'Company', className: 'company' },
        { url: '/about/portfolio', name: 'Portfolio', className: 'portfolio' },
        { url: '/about/team', name: 'Team', className: 'team' }
      ],
      'SubscribeCtrl': [],
      'IndexCtrl': []
    };

    function findRoute(path) {
      for (var controller in routes) {
        for (var route in routes[controller]) {
          if (routes[controller][route].url === path) {
            return routes[controller][route];
          }
        }
      }

      return null;
    };

    function setClass() {
      var route = findRoute($rootScope.currentPath);
      if (route !== null) {
        $rootScope.contentClass = route.className;
      }
    };

    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $rootScope.currentPath = $location.path();

      setClass();

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

    $rootScope.isInnerPage = function() {
      if ($rootScope.currentPath !== '/') {
        return true;
      }

      return false;
    };

    $rootScope.links = [];

    Shadowbox.init({
      skipSetup: true
    });
  });
