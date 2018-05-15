function loadCartArr(resolve) {
  let prom1 = new Promise(function(resolve) {
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
