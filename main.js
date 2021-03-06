angular.module('myApp', [])
.controller('myCtrl', function($http, $scope, $sce) {
    $scope.store = {
        photo: null, 
        searchTerm: null
    }
    $scope.activatePhoto = function(photo) {
        $scope.store.photo = photo; 
    }
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src); 
    }
    $scope.submit = function() {
        $scope.store.searchTerm = $scope.value; 
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