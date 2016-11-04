angular.module('theGameRepo')
  .controller('SinglePostController', SinglePostController)

SinglePostController.$inject = ['$stateParams', '$state', 'GameFactory']

function SinglePostController($stateParams, $state, GameFactory){
  var vm = this

  console.log($stateParams)

  GameFactory.show($stateParams.id)
    .success(function(game){
      vm.game = game
      console.log(vm.game);
    })

    vm.destroyGame = function(game){
      GameFactory.destroy(vm.game._id)
        .success(function(data){
          $state.go('games')
        })
    }
}
