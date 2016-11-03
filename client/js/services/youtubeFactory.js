angular.module('theGameRepo')
  .factory('YoutubeFactory',['$http', YoutubeFactory])

//Youtube
function YoutubeService($http) {

  var apiKey = "AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8",
  var apiURL = "https://www.googleapis.com/youtube/v3/search?videoEmbeddable=true&order=date&part=snippet&channelId=UCCWQ_UwBYZSHDUtkC1nTyXw&type=video&maxResults=10&key=" + apiKey,
  var youtubeFactory = {},

  youtubeFactory.getVideos = function() {
    return $http.get(apiURL);
  };

  return youtubeFactory;

}
