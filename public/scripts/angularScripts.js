
var app = angular.module("EPAApp", ['ngSanitize'] );


app.controller("AppController", function ($scope, $window, $rootScope, $compile, $timeout, $http) {

  
    $window.initMap = function () {
          $scope.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        
        $scope.loadMapData();
    }
    
    
    $scope.loadMapData = function () {
        $.getJSON('data/mapData.json')
           .then(function(data){
            
              $scope.emitters = data;    

            for  (e of $scope.emitters) {

                var myLatLng = new google.maps.LatLng(e.lat, e.lng);

                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: $scope.map,
                    title: e.Site
                  });
            }
        
        });
    };

});











