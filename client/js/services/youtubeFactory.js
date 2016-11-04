// (function(){
//   'use strict';
// angular.module('theGameRepo')
//   .factory('YoutubeFactory',['$http', YoutubeFactory])
//
// //Youtube
// function YoutubeFactory($http) {
//
//   var apiKey = "AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8"
//   var apiURL = "https://www.googleapis.com/youtube/v3/channels?id=UCCWQ_UwBYZSHDUtkC1nTyXw&key=AIzaSyBEdo7-BuluP3i-xgKQxa6SombQ2pL0wF8&typesearch?videoEmbeddable=true&order=date&part=snippet&=video&maxResults=10"
//   // https://www.googleapis.com/youtube/v3/channels?id=fjTOrCPnAblTngWAzpnlMA&key={YOUR_API_KEY}&part=snippet,contentDetails,statistics
//
//   var youtubeService = {}
//
//   youtubeService.getVideos = function() {
//     return $http.get(apiURL);
//   };
//
//   return youtubeService
//
// }
// })
