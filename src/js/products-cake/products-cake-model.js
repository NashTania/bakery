import AbstractCartModel from '../cart/abstract-cart-model.js';

function ProductsCakeModel() {
  AbstractCartModel.apply(this, arguments);
}
ProductsCakeModel.prototype = new AbstractCartModel();

ProductsCakeModel.prototype.load = function() {
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
        self.data = products;
        resolve()
      }
    })
  })
}

ProductsCakeModel.prototype.getCartArr = function() {
  var userId = this.getCartId();
  return new Promise(function(resolve) {
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
},

// Pass salutation value as an argument
ProductsCakeModel.prototype.sortCard = function() {
  var salutation = document.getElementById('salutation');
  if (salutation.value === 'not-selected') {
    return this.data;
  }

  return this.data.filter(function(item) {
    return salutation.value === item.type
  })
}


export default ProductsCakeModel;
