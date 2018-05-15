let prom1 = new Promise(function(resolve) {
  $(document).ready(function() {
    switchToStateFromURLHash(resolve);
  });
})

let prom2 = new Promise(function(resolve) {
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

let prom3 = new Promise(function(resolve) {
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

Promise.all([prom1, prom2, prom3]).then((args) => {
  console.log(args);
  if(args[0] === 'cart.html'){
  renderItemToCard(args[1], args[2])
}
})
