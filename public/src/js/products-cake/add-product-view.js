import AbstractView from '../common/abstract-view.js';

function AddProductView() {
  AbstractView.apply(this, arguments)
}

AddProductView.prototype = new AbstractView();

AddProductView.prototype.template = './src/js/products-cake/add-product.html';

AddProductView.prototype.renderView = function() {
  var self = this;

  $('#submit-obj-add').click(function(event) {
    self.controller.onClickAddObj(event);
  })
},

AddProductView.prototype.createProduct = function() {
  var form = document.getElementById('addProductForm');
  var product = {};
  var nameProduct = document.getElementById('nameProduct');
  product.name = nameProduct.value;
  var description = document.getElementById('description');
  product.description = description.value;
  var priceProduct = document.getElementById('price');
  product.price = priceProduct.value;
  var weighProduct = document.getElementById('weigh');
  product.weigh = weighProduct.value;
  var typeProduct = document.getElementById('typeProduct');
  product.type = typeProduct.value;
  var imgProduct = document.getElementById('foto');
  product.img = imgProduct.value;
  return product;
}


export default AddProductView;
