function ProductsCakeModel() {
  AbstractCartModel.apply(this, arguments);
}
ProductsCakeModel.prototype = new AbstractCartModel();

ProductsCakeModel.prototype.load = function(resolve) {
  var self = this;
  var promiseModel = new Promise(function(resolve) {
    $.ajax({
      type: "POST",
      url: "https://fe.it-academy.by/AjaxStringStorage2.php",
      data: {
        f: 'READ',
        n: 'tatiana_tkachenko_FD2_cakeStudio_products'
      },

      success: function(response) {
        self.data = response;
        resolve(self.data)
      }
    })
  })
  return promiseModel
}

ProductsCakeModel.prototype.getCartArr = function(resolve) {
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
}
