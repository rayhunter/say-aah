'use strict';

sayAahApp.controller('AnalyzeCtrl', function( $scope, $http ) {
  $scope.master= {};
  $scope.placeholder= {};
  $scope.request='';
  $( 'div.current' ).hide();
  
  var config = {
    headers:  {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Headers': 'origin, content-type',
        'Accept-encoding': 'gzip'
    }
  };

  $scope.update = function( article ) {
    $scope.master= angular.copy(article);
    $scope.data = angular.copy(article);
    $.articleText = angular.copy(article);
    $('div.current').show();

    $.ajax({
        url: "http://access.alchemyapi.com/calls/text/TextGetRankedKeywords?apikey=b24e5860c2091260bc776c7e075b9532f5e1a259&outputMode=json&showSourceText=1&text="+$.articleText+"&jsonp=?",
        type: 'POST',
        data: [{ text: $scope.data }],
        dataType: 'jsonp',
        success: function( response ){
            var $keywords = [];
            for ( var i = 0; i <  response.keywords.length; i++ ) {
                //console.log( response.keywords[i].text );
                $keywords.push( ' '+ response.keywords[i].text);
            }
            $( 'div#target.tags span' ).text( $keywords );
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
            $('div#target1.categories span').text( response.category );
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
    $scope.article = "";
    $scope.master = "";
    $( 'div.current' ).hide( "slow" );
    $( 'div#target' ).hide( "slow" );
    $( 'div#target1' ).hide( "slow" );
  };
 
  $scope.reset();
});