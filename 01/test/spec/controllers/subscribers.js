'use strict';

describe('Controller: SubscribersCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var SubscribersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubscribersCtrl = $controller('SubscribersCtrl', {
      $scope: scope
    });
  }));
});
