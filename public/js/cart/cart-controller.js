function CartController(view, model) {
  AbstractController.apply(this, arguments);

}

CartController.prototype = new AbstractController();

CartController.prototype.renderView = function(data) {
  this.view.renderView(data);
},

CartController.prototype.load = function(resolve) {
  this.model.load(resolve)
},

CartController.prototype.remove = function(id) {
  var cartArray = [];
  var userId = this.model.getCartId();
  var self = this;
  var prom1 = new Promise(function(resolve) {
    self.model.getCartArr(resolve)
  })
  Promise.all([prom1]).then(function(args) {
    if (args[0]) {
      var cartArray = JSON.parse(args[0].result);
      var removeId = id;
      for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i] === removeId) {
          cartArray.splice(i, 1);
          break;
        }
      }
    }
    sendRequest('tatiana_tkachenko_FD2_cakeStudio_cart_' + userId, cartArray);
    alert('товар удален');
  })
},

CartController.prototype.onRemoveClick = function(event) {
  var removeId = event.target.dataset.id;
  this.remove(removeId)
}
