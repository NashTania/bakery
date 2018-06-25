function CartModel(view, controller) {

}
CartModel.prototype.renderModel = function(resolve) {
  let prom1 = new Promise(function(resolve) {
    var userId = CartModel.prototype.getCartId();
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
    resolve(args)
  })
}

CartModel.prototype.makeid = function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

CartModel.prototype.getCartId = function() {
  var userId = localStorage.getItem('tatiana_tkachenko_FD2_cakeStudio_cart');
  if (!userId) {
    userId = this.makeid();
    localStorage.setItem('tatiana_tkachenko_FD2_cakeStudio_cart', userId)
  }
  return userId;
}
