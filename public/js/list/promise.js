let promise1 = new Promise(function(resolve) {
  $(document).ready(function() {
    switchToStateFromURLHash(resolve);
  });

})

let promise2 = new Promise(function(resolve) {
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

Promise.all([promise1, promise2]).then((args) => {
  if (args[0] === 'products_cake.html') {
    drawingOfCards(args[1])
  }
});
