'use strict';

describe('Controller: AnalyzeCtrl', function() {

  // load the controller's module
  beforeEach(module('sayAahApp'));

  var AnalyzeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    AnalyzeCtrl = $controller('AnalyzeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
