var app = angular.module("EPA-app", ['ngSanitize'] );


app.controller("AppController", function ($window) {

    
    var vm = this;
    
    vm.gallonsFactor = 112.523911;
    vm.carsFactor = 0.210526;
    vm.coalFactor = 0.000000263;
    
    
    vm.sidebarOpen=false;
      
    
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






    







