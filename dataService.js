/**
 * Created by divism on 7/30/2014.
 */
codeApp.factory('dataService',function dataService($http,$log){

        return{
            getData:function (successcb) {
                $http({method: 'GET', url: 'question.json'}).
                    success(function (data, status, headers, config) {
                        console.log("varuthu");
                        successcb(data);
                    }).
                    error(function (data, status, headers, config) {
                        $log.warn(data, status, headers, config);
                        alert(data);
                    });
            }
        };
});