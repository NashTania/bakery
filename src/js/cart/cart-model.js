import AbstractCartModel from '../cart/abstract-cart-model.js';

function CartModel() {
  AbstractCartModel.apply(this, arguments);
}
CartModel.prototype = new AbstractCartModel();

CartModel.prototype.load = function(resolve) {
  var self = this;
  this.modelStr = [];
  var prom1 = new Promise(function(resolve) {
    var userId = self.getCartId();
    $.ajax({
      type: "POST",
      url: "https://fe.it-academy.by/AjaxStringStorage2.php",
      data: {
        f: 'READ',
        n: 'tatiana_tkachenko_FD2_cakeStudio_cart_' + userId
      },
      success: resolve

    })
  })

  var prom2 = new Promise(function(resolve) {
    $.ajax({
      type: "POST",
      url: "https://fe.it-academy.by/AjaxStringStorage2.php",
      data: {
        f: 'READ',
        n: 'tatiana_tkachenko_FD2_cakeStudio_products'
      },
      success: resolve
    })
  })

  return Promise.all([prom1, prom2]).then(function(args) {
    var cardProducts = JSON.parse(args[0].result); // word array shouldn't be used in names use terminating 's'
    var products = JSON.parse(args[1].result);
    var resultProducts = [];
    nevImput : for (var i = 0; i < cardProducts.length; i++) {
      var cardID = cardProducts[i];

      for (var j = 0; j < products.length; j++) {
        var product = products[j];
        if (product.id === + cardID) {
          resultProducts.push(product);
          continue nevImput;
        }
      }
    }
    return self.data = resultProducts;
  })

}

CartModel.prototype.getCartArr = function(resolve) {
  var userId = this.getCartId();
  $.ajax({
    type: "POST",
    url: "https://fe.it-academy.by/AjaxStringStorage2.php",
    data: {
      f: 'READ',
      n: 'tatiana_tkachenko_FD2_cakeStudio_cart_' + userId
    },
    success: resolve
  })
},

CartModel.prototype.priceCalculation = function() {
  var sum = 0;
  var productsPrice = document.querySelectorAll('.price');
  for (var j = 0; j < productsPrice.length; j++) {
    var price = productsPrice[j].value;
    sum += + price;
  }
  return sum
}



export default CartModel;
