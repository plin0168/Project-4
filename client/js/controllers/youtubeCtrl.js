(function(){
  'use strict';
angular.module('theGameRepo')
    .controller('YoutubeController', ['$http',YoutubeController]);

YoutubeController.$inject = ['GameFactory']

function YoutubeController(GameFactory, $http) {
    var vm = this;
    vm.videoListing = [];
    vm.message = "Youtube Data API with AngularJS";

    // var showVideos,
    //     getVideos;
    //
    //     var apiKey = "AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8"
        // var apiURL = "https://www.googleapis.com/youtube/v3/channels?id=UCCWQ_UwBYZSHDUtkC1nTyXw&key=AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8&typesearch?videoEmbeddable=true&order=date&part=snippet&=video&maxResults=10"
    // // var youtubeService = {}

    GameFactory.getVideos = function($http) {
      return $http.get(apiURL);
    };

    var showVideos = function() {
      GameFactory.getVideos()
        .success(function(data) {
          vm.videoListing = data.items;
        });
    }
    showVideos();
  }
})();
