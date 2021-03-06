var theGameRepo = angular.module('theGameRepo',['ui.router','ui.bootstrap'])
  .config(['$stateProvider','$urlRouterProvider', '$locationProvider', router])
  .directive('navigationBar', navigationBar)


function router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl:'templates/home.html'
    })
    .state('games', {
      url:'/games',
      templateUrl: 'templates/games.html',
      controller: 'GamesController as gc'
    })
    .state('share', {
      url: '/share',
      templateUrl: 'templates/share.html',
      controller: 'ShareGameController as sgc'
    })
    .state('game', {
      url: '/games/:id',
      templateUrl:'templates/game.html',
      controller: 'SinglePostController as spc'
    })
    .state('youtube',{
      url: '/youtube',
      templateUrl:'templates/youtube.html',
      controller: 'YoutubeController as yc'
    })
}

function navigationBar(){
  return{
    restrict:'E',
    templateUrl: 'partials/nav.html'
  }
}
