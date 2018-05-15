function addProductToCart(id) {
  var cartArray = [];
  var userId = getCartId();

  $.ajax({
    type: "POST",
    url: "https://fe.it-academy.by/AjaxStringStorage2.php",
    data: {
      f: 'READ',
      n: 'tatiana_tkachenko_FD2_cakeStudio_cart_' + userId
    },
    success: function(data) {
      if (data.result) {
        var cartArray = JSON.parse(data.result);
        cartArray.push(id);
      } else {
        cartArray = [];
        cartArray.push(id);
      }
      sendRequest('tatiana_tkachenko_FD2_cakeStudio_cart_' + userId, cartArray);
      alert('товар добавлен');
      console.log(cartArray);
    }
  })

}
