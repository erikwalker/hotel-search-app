angular.module('hotelApplication').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory) {
  var vm = this;
  vm.title = 'Hotel Search Application';
  hotelDataFactory.hotelList().then(function(response) {
    // console.log(response);
    vm.hotels = response.data;
  });
}
