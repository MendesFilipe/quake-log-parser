angular.element(document).ready(function(){
    angular.module('project',[])
        .controller('myCtrl', ['$scope','parser',function ($scope,parser) {
            $scope.games = [];
            $scope.players = [];
            $scope.total_game;
            $scope.total_kills = [];
            $scope.total_players = [];
			$scope.kills = [];
			$scope.killsMeans = [];
           
            $scope.games = parser.getGames();
        }])
        .factory('parser',function(){
            return {
                getGames : function(){
                    return main.init();
                }
            };						
        });

    angular.bootstrap(document,['project']);
});