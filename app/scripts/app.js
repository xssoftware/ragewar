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
  .run(function ($rootScope, $location) {

    var routes = [
      { url: '/game', name: 'Home', className: 'home', category: 'game' },
      { url: '/game/build', name: 'Build', className: 'build', category: 'game' },
      { url: '/game/battle', name: 'Battle', className: 'battle', category: 'game' },
      { url: '/game/trade', name: 'Trade', className: 'trade', category: 'game' },
      { url: '/game/discovery', name: 'Discovery', className: 'discovery', category: 'game' },
      { url: '/game/campaign', name: 'Campaign', className: 'campaign', category: 'game' },
      { url: '/game/social', name: 'Social', className: 'social', category: 'game' },
      { url: '/media', name: 'Videos', className: 'videos', category: 'media' },
      { url: '/media/screens', name: 'Screenshots', className: 'screens', category: 'media' },
      { url: '/media/art', name: 'Art', className: 'art', category: 'media' },
      { url: '/about', name: 'Company', className: 'company', category: 'about' },
      { url: '/about/portfolio', name: 'Portfolio', className: 'portfolio', category: 'about' },
      { url: '/about/team', name: 'Team', className: '', category: 'about' },
      { url: '/', category: 'index' },
      { url: '/subscribe', category: 'subscribe' }
    ];

    function getByCategory(category) {
      var result = [];
      for (var i = 0; i < routes.length; i++) {
        if (routes[i].category === category) {
          result.push(routes[i]);
        }
      }

      if (result.length === 1) {
        return [];
      }

      return result;
    }

    function findRoute(path) {
      for (var i = 0; i < routes.length; i++) {
        if (routes[i].url === path) {
          return routes[i];
        }
      }

      return null;
    }

    $rootScope.$on('$routeChangeSuccess', function () {
      $rootScope.currentPath = $location.path();
      var route = findRoute($location.path());
      if (route !== null && $rootScope.currentCategory !== route.category) {
        $rootScope.links = getByCategory(route.category);
        $rootScope.currentCategory = route.category;
        $rootScope.contentClass = route.className;
      }
    });

    $rootScope.isPageActive = function(url) {
      if ($rootScope.currentPath === url) {
        return true;
      }

      return false;
    };

    $rootScope.isCategoryActive = function(category) {
      var route = findRoute($rootScope.currentPath);
      if (route !== null) {
        if (route.category === category) {
          return true;
        }
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
