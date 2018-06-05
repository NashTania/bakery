function ProductsCakeController(view, model) {
  AbstractController.apply(this, arguments);

}
ProductsCakeController.prototype = new AbstractController();

ProductsCakeController.prototype.addProductToCart = function(id) {
  this.id = id;
  var cartArray = [];
  var self = this;
  var userId = this.model.getCartId();
  var promise1 = new Promise(function(resolve) {
    self.model.getCartArr(resolve)
  })
  Promise.all([promise1]).then(function(args) {
    if (args[0]) {
      var cartArray = JSON.parse(args[0].result);
      cartArray.push(self.id);
    } else {
      cartArray = [];
      cartArray.push(self.id);
    }
    sendRequest('tatiana_tkachenko_FD2_cakeStudio_cart_' + userId, cartArray);
    alert('товар добавлен');
    console.log(cartArray);
  })
},

ProductsCakeController.prototype.onAddCart = function(event) {
  var objID = event.target.dataset.id;
  this.addProductToCart(objID)
}
