angular.module('theGameRepo')
    .controller('YoutubeController', YoutubeController);

YoutubeController.$inject = ['GameFactory', '$http']

function YoutubeController(GameFactory, $http) {
    var vm = this;
    vm.videoListing = [];
    vm.message = "Star Wars Youtube Video Channel!";

    // var showVideos,
    //     getVideos;
    //
    //     var apiKey = "AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8"
        // var apiURL = "https://www.googleapis.com/youtube/v3/channels?id=UCCWQ_UwBYZSHDUtkC1nTyXw&key=AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8&typesearch?videoEmbeddable=true&order=date&part=snippet&=video&maxResults=10"
    // // var youtubeService = {}

    // GameFactory.getVideos = function($http) {
    //   return $http.get(apiURL);
    // };

    GameFactory.getVideo();
    //
    // var showVideos = function() {
    //   GameFactory.getVideos()
    //     .success(function(data) {
    //       vm.videoListing = data.items;
    //     });
    // }
    // showVideos();
  // }
}
