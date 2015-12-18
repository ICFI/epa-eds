
var app = angular.module("EPA-app", ['ngSanitize'] );


app.controller("AppController", function ($window) {

    
    var vm = this;
    
    vm.sidebarOpen=false;
  
    /*$window.initMap = function () {
          this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        
        this.loadMapData();
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
    };*/
    
    
    
    vm.loadStateData = function () {
        $.getJSON('data/stateData.json')
           .then(function(data){    
            vm.states = data;   
        });
    };
    
    vm.selectedState="intro";
    
    vm.loadStateData();
    
   

});











