angular.module('theGameRepo')
  .factory('GameFactory', ['$http', GameFactory])


function GameFactory($http){
  return{
    index: index,
    show:show,
    destroy:destroy,
    create:create
  }

  function index(){
    return $http.get('/api/games')
  }

  function show(id){
    return $http.get('/api/games' + id)
  }

  function destroy(id){
    return $http.delete('/api/games/' + id)
  }

  function create(game){
    return $http.post('/api/games', game)
  }
}
