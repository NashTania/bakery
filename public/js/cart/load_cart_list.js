function loadCartList(resolve) {
  let prom1 = new Promise(function(resolve) {
    var cartArray = [];
    var userId = getCartId();
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
}
