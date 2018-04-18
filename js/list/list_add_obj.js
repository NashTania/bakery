function addProducts() {
  $.ajax({
    type: "POST",
    url: "https://fe.it-academy.by/AjaxStringStorage2.php",
    data: {
      f: 'READ',
      n: 'tatiana_tkachenko_FD2_cakeStudio_products'
    },
    success: function(data) {
      var products = JSON.parse(data.result);
      var product = createProduct();
      var lastId = products[products.length - 1].id;
      products.push(product);
      product.id = lastId + 1;
      $(product).attr('data-id', product.id);
      console.log(products);
      sendRequest('tatiana_tkachenko_FD2_cakeStudio_products', products);
    }
  })
}

$(document).ready(function() {
  $('#add-submit-obj').click(function() {
    addProducts();
  });
})

/*window.onload = function(){
  var buttonAdd = document.getElementById('add-submit');
  buttonAdd.addEventListener('click', function(){
  addProducts();
})
}*/
