function AddProductModel() {
  AbstractModel.apply(this, arguments);
}
AddProductModel.prototype = new AbstractModel();

AddProductModel.prototype.load = function(resolve) {
  var self = this;
  return new Promise(function(resolve) {
    $.ajax({
      type: "POST",
      url: "https://fe.it-academy.by/AjaxStringStorage2.php",
      data: {
        f: 'READ',
        n: 'tatiana_tkachenko_FD2_cakeStudio_products'
      },
      success: function(response) {
        var products = JSON.parse(response.result);
        self.data = products; // modelStr property isn't defined in the model class
        // modelStr name doesn't make sens (it's hash array and it's data)
        resolve(self)
      }
    })
  })
},

AddProductModel.prototype.addProducts = function() {
  var self = this;
  console.log(this.controller)
  this.load().then(function(value) {
    var products = value.data;
    var product = self.controller.view.createProduct(); // It should be called as method
    var lastId = products[products.length - 1].id; // Move other logic to the model
    products.push(product);
    product.id = lastId + 1;
    $(product).attr('data-id', product.id);
    self.model.sendRequest('tatiana_tkachenko_FD2_cakeStudio_products', products);
    console.log('продукт добавлен');
  })
}
