import AbstractController from '../common/abstract-controller.js';
import ProductsCakeModel from './products-cake-model.js';
import ProductsCakeView from './products-cake-view.js';

function ProductsCakeController(view, model) {
  AbstractController.apply(this, arguments);
}

ProductsCakeController.prototype = new AbstractController();

ProductsCakeController.prototype.addProductToCart = function(id) {
  this.id = id;
  var self = this;
  var userId = this.model.getCartId();
  self.model.getCartArr().then(function(value) {
  var  cartArray = value ? JSON.parse(value.result) : [];
    cartArray.push(self.id);
    self.model.sendRequest('tatiana_tkachenko_FD2_cakeStudio_cart_' + userId, cartArray);
    alert('товар добавлен');
  })
},

ProductsCakeController.prototype.onAddCart = function(event) {
  this.addProductToCart(event.target.dataset.id)
}
export default ProductsCakeController
