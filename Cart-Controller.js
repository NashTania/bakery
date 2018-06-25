function CartController() {
  AbstractController.apply(this, arguments);
}
CartController.prototype = new AbstractController();

var cartView = new CartView();
CartController.prototype.renderView = function(data) {
  cartView.renderView(data);
}

CartController.prototype.remove = function(id) {
  cartView.remove(id)
}

var cartModel = new CartModel();
CartController.prototype.renderModel = function(resolve) {
  cartModel.renderModel(resolve)
}

CartController.prototype.makeid = function() {
  cartModel.makeid()
}

CartController.prototype.getCartId = function() {
  cartModel.getCartId()
}
