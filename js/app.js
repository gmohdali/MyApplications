//$root scope 
var app = angular.module('myApp1', []); 

// $scope 01 
app.controller('detailsCtrl', function($scope){
      var c = 0;
      $scope.process = function(details){
       c = c+1;
       alert(c)   	 ;
      }
});



// $scope 02
app.controller('details2Ctrl',  function($scope){
  
      var c = 0;

      $scope.process = function(details){
          c = c+1;
       //alert("details");
       alert("child2" + " " + c)      ;
      }
});

// $scope 03
app.controller('details3Ctrl',  function($scope){
       $scope.city = "hyderabad";
       $scope.state = "AP";

       this.state = "karnataka";
       this.city =  "blore";
});





   


/*app.controller('myCtrl', function($scope) 

{  alert("called controller");
    

    var names = {firstname:"Mohammedali" , lastname:"Gafur abdul"};

    if($scope.fname != names.firstname) {


         alert("you have entered wroong name");
    }

/** assign default values   ****/
 
//$scope.fname = "gafur" + "," + $scope.sname;
// alert("$scope.sname");
// alert("$scope.lname"); /*

//}   );   



