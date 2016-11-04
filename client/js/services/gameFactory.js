(function() {
  'use strict';
angular.module('theGameRepo')
  .factory('GameFactory',['$http', GameFactory])


function GameFactory($http){
  return{
    index: index,
    show:show,
    destroy:destroy,
    create:create,
    update:update
  }

  function index(){
    return $http.get('/api/games')
  }

  function show(paramsFromCtrl){
    return $http.get('/api/games' + paramsFromCtrl)
  }

  function destroy(id){
    return $http.delete('/api/games/' + id)
  }

  function create(game){
    return $http.post('/api/games', game)
  }

  function update(id, game){
    return $http.patch('/api/games' + id, game)
  }

  var apiKey = "AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8"
  var apiURL = "https://www.googleapis.com/youtube/v3/channels?id=UCCWQ_UwBYZSHDUtkC1nTyXw&key=AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8&typesearch?videoEmbeddable=true&order=date&part=snippet&=video&maxResults=10"
  // https://www.googleapis.com/youtube/v3/channels?id=fjTOrCPnAblTngWAzpnlMA&key={YOUR_API_KEY}&part=snippet,contentDetails,statistics

  var youtubeService = {}

  youtubeService.getVideos = function() {
    return $http.get(apiURL);
  };

  return youtubeService
}
})();
// (function() {
//   'use strict';
//
//   angular
//     .module('theGameRepo', []);
// })();
//
// (function() {
//   'use strict';
//
//   angular
//     .module('theGameRepo')
//     .controller('mainController', mainController);
//
//   function mainController(youtubeService) {
//
//     var vm = this;
//     vm.videoListing = [];
//     vm.message = "Youtube Data API with AngularJS";
//
//     function showVideos() {
//       youtubeService.getVideos()
//         .success(function(data) {
//           vm.videoListing = data.items;
//         });
//     }
//     showVideos();
//   }
// })();
//
// (function() {
//   'use strict';
//
//   angular
//     .module('theGameRepo')
//     .factory('youtubeService', youtubeService);
//
//   function youtubeService($http) {
//
//     var apiKey = "AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8"
//     var apiURL = "https://www.googleapis.com/youtube/v3/channels?id=UCCWQ_UwBYZSHDUtkC1nTyXw&key=AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8&typesearch?videoEmbeddable=true&order=date&part=snippet&=video&maxResults=10"
//     var youtubeService = {}
//
//     youtubeFactory.getVideos = function() {
//       return $http.get(apiURL);
//     };
//
//     return youtubeFactory;
//
//   }
// })();
