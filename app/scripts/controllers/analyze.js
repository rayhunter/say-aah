'use strict';

sayAahApp.controller('AnalyzeCtrl', function( $scope, $http ) {
  $scope.master= {};
  $scope.placeholder= {};
  $scope.request='';
  
  var config = {
  	headers:  {
        //'Request Method':'POST',
        //'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
        //'Content-Type': 'application/x-www-form-urlencoded',
        //'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Headers': 'origin, content-type',
        //'Access-Control-Request-Method': 'POST',
        //'Accept': 'application/json;odata=verbose',
        'Accept-encoding': 'gzip'
        //"X-Testing" : "testing"
    }
  };

  $scope.update = function(article) {
    $scope.master= angular.copy(article);
    $scope.data = angular.copy(article);
    $.articleText = angular.copy(article);

    $.ajax({
        url:"http://access.alchemyapi.com/calls/text/TextGetRankedKeywords?apikey=b24e5860c2091260bc776c7e075b9532f5e1a259&outputMode=json&showSourceText=1&text="+$.articleText+"&jsonp=?",
        //url:"http://access.alchemyapi.com/calls/text/TextGetCategory?apikey=b24e5860c2091260bc776c7e075b9532f5e1a259&outputMode=json&showSourceText=1&jsonp=?",
        type: 'POST',
        data: [{ text: $scope.data }],
        dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
        success:function(json){
            // do stuff with json (in this case an array)
            alert("Success");
        },
        error:function(){
            alert("Error");
        },
    });

    $('div#target').show("slow");
    return false;

    //$http.post("http://access.alchemyapi.com/calls/text/TextGetCategory", { "apikey":"b24e5860c2091260bc776c7e075b9532f5e1a259","outputMode":"json", "showSourceText": 1, "data": $scope.data })
     
    /*$http({"method":"POST","url":"http://access.alchemyapi.com/calls/text/TextGetCategory","apikey":"b24e5860c2091260bc776c7e075b9532f5e1a259","outputMode":"json", "showSourceText": "1", "data": $scope.data })
        .success(function(data, status, headers, config) {
        $scope.data = data;
    }).error(function(data, status, headers, config) {
        $scope.status = status;
    });*/

    //$http.get("/test", config);

    //$http.post('http://access.alchemyapi.com/calls/text/TextGetCategory?showSourceText=1&apikey=b24e5860c2091260bc776c7e075b9532f5e1a259','text=$scope.data').success(alert('YES!'));

    /* $scope.ajax({
      type : "POST",
      url : 'http://access.alchemyapi.com/calls/text/TextGetCategory?showSourceText=1&apikey=b24e5860c2091260bc776c7e075b9532f5e1a259',
      data : '' + $scope.data + '',
      success : alert('you betcha!'), //successCallback
      error : alert('not so Hot!'), //errorCallback,
      cache : false,
      dataType : 'json',
    }); */
  };
 
  $scope.reset = function() {
    $scope.article = angular.copy($scope.master);
    $('div#target').hide("slow");
  };
 
  $scope.reset();
});
