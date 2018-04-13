angular.module('myApp', [])
.controller('myCtrl', function($http, $scope, $sce) {
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src); 
    }
    $scope.submit = function() {
        console.log("IT FIRED")
        console.log($scope.value)
        var params = {
            method: 'flickr.photos.search',
            api_key: '793a4e6f97235f8a40e83d53e2728365',
            tags: $scope.value,
            format: 'json',
            nojsoncallback: 1
        }
        $http({ 
            method: 'GET', 
            url: 'https://api.flickr.com/services/rest', 
            params: params
        })
        .then(function(response) {
            $scope.results = response.data.photos.photo; 
            console.log(response.data.photos.photo)
        })
   }
})