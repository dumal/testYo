'use strict';

describe('Controller: OrcCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var OrcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrcCtrl = $controller('OrcCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
