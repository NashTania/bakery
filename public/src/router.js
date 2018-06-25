import './css/styles.css';
import AbstractController from './js/common/abstract-controller.js';
import AbstractModel from './js/common/abstract-model.js';
import AbstractView from './js/common/abstract-view.js';
import ProductsCakeController from './js/products-cake/products-cake-controller.js';
import ProductsCakeModel from './js/products-cake/products-cake-model.js';
import ProductsCakeView from './js/products-cake/products-cake-view.js';
import AbstractCartModel from './js/cart/abstract-cart-model.js';
import CartController from './js/cart/cart-controller.js';
import CartView from './js/cart/cart-view.js';
import CartModel from './js/cart/cart-model.js';
import AddProductController from './js/products-cake/add-product-controller.js';
import AddProductModel from './js/products-cake/add-product-model.js';
import AddProductView from './js/products-cake/add-product-view.js';
import OrderingView from './js/cart/ordering-view.js';
import $ from 'jquery';


window.onhashchange = switchToStateFromURLHash;
var routes = null;

function switchToStateFromURLHash(resolve) { // Refactor this function
  var URLHash = window.location.hash;
  routes[URLHash.substr(1)].run(URLHash.substr(1));
}

$(document).ready(function() {
  routes = {
    'main.html': new AbstractController('./src/js/common/main.html'), // move all html files to related modules, and name them .template.html
    'about.html': new AbstractController('./src/js/common/about.html'),
    'products.html': new AbstractController('./src/js/products-cake/products.html'),
    'products_cake.html': new ProductsCakeController(new ProductsCakeView(), new ProductsCakeModel()),
    'contacts.html': new AbstractController('./src/js/common/contacts.html'),
    'cart.html': new CartController(new CartView(), new CartModel()),
    'add-product.html': new AddProductController(new AddProductView(), new AddProductModel()),
    'ordering.html': new AbstractController(new OrderingView())
  };
  switchToStateFromURLHash();
});
