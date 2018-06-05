function AddProductController(view, model) {
  AbstractController.apply(this, arguments);
  this.view.setController(this);
}
AddProductController.prototype = new AbstractController();

AddProductController.prototype.createProduct = function() {
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

},

AddProductController.prototype.addProducts = function() {
  var self = this;
  var promise1 = new Promise(function(resolve) {
    self.model.renderModel(resolve)
  })
  Promise.all([promise1]).then(function(args) {
    var products = JSON.parse(args[0]);
    var product = createProduct();
    var lastId = products[products.length - 1].id;
    products.push(product);
    product.id = lastId + 1;
    $(product).attr('data-id', product.id);
    console.log(products);
    sendRequest('tatiana_tkachenko_FD2_cakeStudio_products', products);
  })
},

AddProductController.prototype.onClickAddObj = function() {
  this.addProducts();

}
