window.onhashchange = switchToStateFromURLHash;
var routes = null;

function switchToStateFromURLHash(resolve) {
  var URLHash = window.location.hash;
  var stateStr = URLHash.substr(1);

  var stateObj = routes[stateStr];
//  var abstractView = new AbstractController(stateStr);
  //var promiseView = abstractView.callPage(stateStr);
  var promiseView = null;
  if (!stateObj.view) {
    promiseView = new Promise(function(resolve) {
      callPage(stateStr, function(response) {
        stateObj.view = response;
        resolve(stateObj)
      })
    })
  } else {
    promiseView = new Promise(function(resolve) {
      resolve(stateObj);
    })
  }

  var promiseModel = new Promise(function(resolve) {
    stateObj.renderModel(resolve)
  })

  Promise.all([ promiseView, promiseModel]).then((args) => {
    $("#main").css("display", "none");
    $('.content').html(stateObj.view);
    stateObj.renderView(args[1])
  })
}

$(document).ready(function() {
  routes =  {
    /*'main.html': {
      view: null,
      renderView: renderAbstract,
      loadModel: modelAbstract
    },

    'about.html': {
      view: null,
      renderView: renderAbstract,
      loadModel: modelAbstract
    },

    'products.html': {
      view: null,
      renderView: renderAbstract,
      loadModel: modelAbstract
    },

    'products_cake.html': {
      view: null,
      renderView: drawingOfCards,
      loadModel: loadList,

    },

    'contacts.html': {
      view: null,
      renderView: renderAbstract,
      loadModel: modelAbstract
    },

    'cart.html': {
      view: null,
      loadModel: loadCartArr,
      renderView: renderItemToCard,
    },

    'add-Product.html': {
      view: null,
      renderView: renderAbstract,
      loadModel: modelAbstract
    },

    'ordering.html': {
      view: null,
      renderView: renderAbstract,
      loadModel: modelAbstract
    }*/
    'main.html': new MainController('main.html'),
    'about.html': new AboutController('about.html'),
    'products.html': new ProductsController('products.html'),
    'products_cake.html': new ProductsCakeController('products_cake.html'),
    'contacts.html': new ContactsController('contacts.html'),
    'cart.html': new CartController('cart.html'),
  };
  switchToStateFromURLHash();
});
