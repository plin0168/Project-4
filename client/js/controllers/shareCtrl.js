angular.module('theGameRepo')
  .controller('ShareGameController', ShareGameController)

ShareGameController.$inject = [ '$stateParams', '$state', 'GameFactory']

function ShareGameController($stateParams, $state, GameFactory){
  var vm = this

  vm.createGame = function(){
    GameFactory.create(vm.game)
      .success(function(data){
        $state.go('games')
      })
  }
}
