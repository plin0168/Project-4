angular.module('theGameRepo')
    .controller('YoutubeController', YoutubeController);

GamesController.$inject = ['$scope', '$state', 'YoutubeFactory']

function youtubeController(YoutubeFactory) {
    var vm = this;
    vm.videoListing = [];
    vm.message = "Youtube Data API with AngularJS";

    function showVideos() {
      youtubeService.getVideos()
        .success(function(data) {
          vm.videoListing = data.items;
        });
    }
    showVideos();
  }
