/**
 * Created by divism on 7/30/2014.
 */
var global;

codeApp.controller('mainController',function mainController($scope,dataService){

    dataService.getData(function(data)
    {
        console.log(data);
        $scope.topic=data.topic;
        global=data;
    });
});

codeApp.controller('coreJavaController',function coreJavaController($scope)
{
    $scope.inc=0;
    $scope.score=0;
    $scope.topic=global.topic[0].topicName;
    $scope.question=global.topic[0].questions;
    console.log($scope.question.length);
    $scope.array=[];
    /*$scope.checkedArray=[$scope.question.length];*/
    $scope.checkedArray=[];
    for(var i=0;i<$scope.question.length;i++)
    {
        $scope.checkedArray[i]=0;
    }

    $scope.next= function(inc)
    {

        document.getElementById("next").disabled=false;
        document.getElementById("prev").disabled=false;
        document.getElementById("Check").disabled=false;

        $scope.inc++;

        if($scope.checkedArray[$scope.inc]==1){
            document.getElementById("Check").disabled=true;
        }

        $scope.array=[];
        if(inc==($scope.question.length-2))
        {
            console.log(inc);
            document.getElementById("next").disabled=true;
        }
    }


    $scope.prev= function(inc)
    {
        //disabling(inc);
        document.getElementById("Check").disabled=false;

        if($scope.inc==1)
            document.getElementById("prev").disabled = true;
        else
            document.getElementById("prev").disabled = false;
        document.getElementById("next").disabled=false;
        console.log("inv "+inc);
        $scope.inc--;

        if($scope.checkedArray[$scope.inc]==1){
            document.getElementById("Check").disabled=true;
        }
        console.log($scope.inc);

    }
    $scope.result=function()
    {
        $scope.checkedArray[$scope.inc]=1;
        $scope.ansArray=$scope.question[$scope.inc].answer;
        console.log($scope.ansArray);
        if (angular.equals($scope.array,$scope.ansArray))
        {
            $scope.score++;

        }

        document.getElementById("Check").disabled=true;


        for(var i=0;i<$scope.ansArray.length;i++)
        {
            console.log("length"+$scope.ansArray.length)
            console.log($scope.ansArray[i]);
            document.getElementById($scope.ansArray[i]).innerHTML="<img src='images.jpg'>"
        }

        return $scope.score;
    }
}).directive("checkboxGroup", function () {

        return {

            restrict: "A",
            link: function (scope, elem, attrs) {
                // Determine initial checked boxes
                if (scope.array.indexOf(scope.item.id) !== -1) {
                    elem[0].checked = false;
                }

                // Update array on click
                elem.bind('click', function () {
                    var index = scope.array.indexOf(scope.item.id);
                    // Add if checked
                    if (elem[0].checked) {
                        if (index === -1) scope.array.push(scope.item.id);
                    }
                    // Remove if unchecked
                    else {
                        if (index !== -1) scope.array.splice(index, 1);
                    }
                    // Sort and update DOM display
                    scope.$apply(scope.array.sort(function (a, b) {
                        return a - b
                    }));
                });
            }
        }
    });

codeApp.controller('exceptionController',function exceptionController($scope)
{
    $scope.inc=0;
    $scope.question=global.topic[1].questions;

    /*  $scope.options=$scope.question[$scope.inc].options;*/


    $scope.next= function(inc)
    {
        document.getElementById("next").disabled=false;
        document.getElementById("prev").disabled=false;
        $scope.inc++;
        if(inc==$scope)
        {
            document.getElementById("prev").disabled=true;
        }
    }
    $scope.prev= function(inc)
    {
        document.getElementById("next").disabled=false;
        document.getElementById("prev").disabled=false;
        $scope.inc--;
        if(index<=0)
        {
            document.getElementById("prev").disabled=true;
        }
    }




});