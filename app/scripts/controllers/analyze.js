'use strict';

sayAahApp.controller('AnalyzeCtrl', function( $scope, $http ) {
  $scope.master= {};
  $scope.placeholder= {};
  $scope.request='';
  
  var config = {
  	headers:  {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Headers': 'origin, content-type',
        'Accept-encoding': 'gzip'
    }
  };

  $scope.update = function(article) {
    $scope.master= angular.copy(article);
    $scope.data = angular.copy(article);
    $.articleText = angular.copy(article);

    $.ajax({
        url: "http://access.alchemyapi.com/calls/text/TextGetRankedKeywords?apikey=b24e5860c2091260bc776c7e075b9532f5e1a259&outputMode=json&showSourceText=1&text="+$.articleText+"&jsonp=?",
        type: 'POST',
        data: [{ text: $scope.data }],
        dataType: 'jsonp',
        success: function( response ){
            $scope.resultTags = JSON.stringify(response);
            $( 'div#target.tags span' ).text($scope.resultTags);
        },
        error:function(){
            alert( "Error" );
        },
    });

$.ajax({
        url: "http://access.alchemyapi.com/calls/text/TextGetCategory?apikey=b24e5860c2091260bc776c7e075b9532f5e1a259&outputMode=json&showSourceText=1&text="+$.articleText+"&jsonp=?",
        type: 'POST',
        data: [{ text: $scope.data }],
        dataType: 'jsonp',
        success: function( response ){
            $scope.resultCats = JSON.stringify( response );
            $('div#target1.categories span').text( $scope.resultCats );
        },
        error:function(){
            alert( "Error" );
        },
    });

    $( 'div#target' ).show( "slow" );
    $( 'div#target1' ).show( "slow" );

    return false;

  };
 
  $scope.reset = function() {
    //$scope.article = angular.copy( $scope.master );
    $scope.article = "";
    $scope.master = "";
    $( 'div#target' ).hide( "slow" );
    $( 'div#target1' ).hide( "slow" );
  };
 
  $scope.reset();
});
