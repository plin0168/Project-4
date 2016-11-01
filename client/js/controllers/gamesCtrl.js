angular.module('theGameRepo')
  .controller('GamesController', GamesController)

GamesController.$inject = ['$scope', '$state', 'GameFactory']

function GamesController($scope, $state, GameFactory){
  var vm = this
  //limit car description length on cars index:
  vm.textLimit = 200

  //get all games when controller loads
  //$http.get('/api/games')
  GameFactory.index()
    .success(function(data){
      vm.games = data
    })

    vm.destroyGame = function(game,index){
      //invoke GameFactory DESTROY method
      GameFactory.destroy(game._id)
        .success(function(data){
          //when its confirmed that its gone from data base
          console.log(data)
          vm.games.splice(index,1)
        })
    }


}
