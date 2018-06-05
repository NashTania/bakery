function CartModel() {
  AbstractCartModel.apply(this, arguments);
}
CartModel.prototype = new AbstractCartModel();

CartModel.prototype.load = function(resolve) {
  let self = this;
  self.modelStr = [];
  let promiseModel = new Promise(function(resolve) {
    let prom1 = new Promise(function(resolve) {
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

    let prom2 = new Promise(function(resolve) {
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

    return Promise.all([prom1, prom2]).then((args) => {
      var cardArray = JSON.parse(args[0].result);
      //console.log(cardArray)
      var productsArray = JSON.parse(args[1].result);
      var arrScreen = [];
      nevImput : for (var i = 0; i < cardArray.length; i++) { // move to the model
        var cardID = cardArray[i];

        for (var j = 0; j < productsArray.length; j++) {
          var product = productsArray[j];
          if (product.id === + cardID) {
            arrScreen.push(product);
            continue nevImput;
          }
        }
      }
      self.data = arrScreen;
      resolve(self.data)
    })
  })
  return promiseModel
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
  for (var j = 0; j < productsPrice.length; j++) { // move price calculation to the model
    var price = productsPrice[j].value;
    sum += + price;
  }
  return sum
}
