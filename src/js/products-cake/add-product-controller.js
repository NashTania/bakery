import AbstractController from '../common/abstract-controller.js';
import AddProductView from '../products-cake/add-product-view.js';
import AddProductModel from '../products-cake/add-product-model.js';

function AddProductController(view, model) {
  AbstractController.apply(this, arguments);
}

AddProductController.prototype = new AbstractController();

// Method isn't named by its functionality


AddProductController.prototype.onClickAddObj = function(event) {
  this.addProducts();
//products/cakeB6.jpg

},

AddProductModel.prototype.addProducts = function() {
  var self = this;
  this.model.load().then(function(value) {
    var products = value.data;
    var product = self.view.createProduct(); // It should be called as method
    var lastId = products[products.length - 1].id; // Move other logic to the model
    products.push(product);
    product.id = lastId + 1;
    $(product).attr('data-id', product.id);
    self.model.sendRequest('tatiana_tkachenko_FD2_cakeStudio_products', products);
    console.log('продукт добавлен');
  })
}

export default AddProductModel;
