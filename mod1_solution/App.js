(function() {
    'use strict';
  
    angular.module('LunchChecker', [])
  
    .controller('CheckerController', CheckerController);
  
    CheckerController.$inject = ['$scope'];
  
    function CheckerController($scope) {
      $scope.inputItems = '';
      $scope.showMessage = false;
      $scope.message = '';
  
      $scope.checkItems = function() {
        if ($scope.inputItems === '') {
          $scope.message = 'Enter Data please';
        } else {
          const items = $scope.inputItems.split(',').map(item => item.trim());
  
          // Check for empty or invalid items, do NOT consider an empty item, i.e., , , as an item towards to the count
          if (items.some(item => item === '' || /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/`\-=]/.test(item))) {
            $scope.message = 'Note: Do not put comma at the end of item also No empty or invalid items';
          } else if (items.length <= 3) {
            $scope.message = 'ENJOY';
          } else {
            $scope.message = 'TOO MUCH';
          }
        }
        $scope.showMessage = true;
      }
    }
  
  })();
  