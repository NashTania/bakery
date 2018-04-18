function removeObj(id) {
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
        var removeId = id;
        for (var i = 0; i < cartArray.length; i++) {
          if (cartArray[i] === removeId) {
            cartArray.splice(i, 1);
            break;
          }
        }
      }
      sendRequest('tatiana_tkachenko_FD2_cakeStudio_cart_' + userId, cartArray);
      alert('товар удален');
      console.log(cartArray);
      
    }
  })
}
