angular.module('hotelApplication').directive('hotelNavigation', hotelNavigation);

function hotelNavigation() {
  return {
    restrict: 'E',
    templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
  };
}
