(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .service('ShoppingListService', ShoppingListService)
  .controller('ToBuyController', ToBuyController) 
    .controller('AlreadyBoughtController', AlreadyBoughtController);

  function ShoppingListService() {
    let service = this;

    let toBuyItems = [
      { name: 'Fruits', quantity: 10 },
      { name: 'Vegetables', quantity: 10 },
      { name: 'Fruits', quantity: 10 },
      { name: 'Vegetables', quantity: 10 },
      { name: 'Fruits', quantity: 10 }
    ];

    let boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (itemIndex) {
      let item = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex, 1);
      boughtItems.push(item);
    };
}

    ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
      let toBuyCtrl = this;
      toBuyCtrl.items = ShoppingListService.getToBuyItems();

  toBuyCtrl.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
      };
    };
    
    AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
      let boughtCtrl = this;
      boughtCtrl.items = ShoppingListService.getBoughtItems();
    };
  
})();

