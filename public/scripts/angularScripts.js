
var app = angular.module("EPA-app", ['ngSanitize'] );


app.controller("AppController", function ($window) {

    
    var vm = this;
    
    vm.gallonsFactor = 112.523911;
    vm.carsFactor = 0.210526;
    vm.coalFactor = 0.000000263;
    
    
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
            console.log(data);
            vm.states = data;   
        });
    };
    
    vm.selectedPage="takingAction";
    
    vm.loadStateData();
    
   

});




app.directive('stateSelect', function() {
  return {
      restrict: 'EA',
      replace: 'true',
      template: '<select class="stateSelect" ng-model="vm.selectedState"><option>Select a State</option><option ng-repeat="state in vm.states">{{state.name}}</option></select>'
  };
});


    








