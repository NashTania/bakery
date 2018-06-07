window.onhashchange = switchToStateFromURLHash;
var routes = null;

function switchToStateFromURLHash(resolve) { // Refactor this function
  var URLHash = window.location.hash;
  routes[URLHash.substr(1)].run(URLHash.substr(1));
}

$(document).ready(function() {
  routes = {
    'main.html': new AbstractController('main.html'), // move all html files to related modules, and name them .template.html
    'about.html': new AbstractController('about.html'),
    'products.html': new AbstractController('products.html'),
    'products_cake.html': new ProductsCakeController(new ProductsCakeView(), new ProductsCakeModel()),
    'contacts.html': new AbstractController('contacts.html'),
    'cart.html': new CartController(new CartView(), new CartModel()),
    'add-product.html': new AddProductController(new AddProductView(), new AddProductModel()),
    'ordering.html': new AbstractController('ordering.html'),
  };
  switchToStateFromURLHash();
});
