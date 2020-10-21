var app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
    $scope.personList = [];

    $scope.AddData = function(){
        var person = {
            id : $scope.personList.length + 1,
            firstName : $scope.firstName,
            lastName : $scope.lastName,
            role : $scope.role,
            email : $scope.email
        };
        $scope.personList.push(person);
        ClearModel();
    };

    $scope.DeleteData = function(per){
        $.grep($scope.personList, function(per){
            if(per.id === $scope.id){
                var index = $scope.personList.indexOf(per);
                $scope.personList.splice(index, 1);
            }
        });
        ClearModel();
    };

    $scope.BindSelectedData = function(per){
        $scope.id = per.id;
        $scope.firstName = per.firstName;
        $scope.lastName = per.lastName;
        $scope.role = per.role;
        $scope.email = per.email;
    };

    $scope.UpdateData = function(){
        $.grep($scope.personList, function(per){
            
            if(per.id === $scope.id){
                
                per.firstName = $scope.firstName;
                per.lastName = $scope.lastName;
                per.role = $scope.role;
                per.email = $scope.email;
            }
        });
        ClearModel();
    };

    function ClearModel(){
        $scope.id = '';
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.role = '';
        $scope.email = '';
    }
});

       