angular.module('theGameRepo')
  .factory('GameFactory', ['$http', GameFactory])


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
}
