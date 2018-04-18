// SPA
window.onhashchange = switchToStateFromURLHash;

var SPAState = {};
function switchToStateFromURLHash() {
  var URLHash = window.location.hash;
  var stateStr = URLHash.substr(1);

  if (stateStr != "") {
    var parts = stateStr.split("_")
    SPAState = {
      pagename: parts[0]
    };
  }

  console.log('Новое состояние приложения:');
  console.log(SPAState);

  var pageHTML = "";
  switch (SPAState.pagename) {
    case 'index':
      $('.page').hide();
      $('#indexPage').show();
      break;

    case 'about':
      $('.page').hide();
      $('#indexAbout').show();
      break;

    case 'products':
      $('.page').hide();
      $('#indexProducts').show();
      break;

    case 'productsCake':
      $('.page').hide();
      $('#indexProductsCake').show();
      break;

    case 'contacts':
      $('.page').hide();
      $('#indexContacts').show();
      break;

    case 'cart':
      $('.page').hide();
      $('#indexCart').show();
      break;

    case 'addProduct':
      $('.page').hide();
      $('#indexAddProduct').show();
      break;
  }
  //document.getElementById('IPage').innerHTML=pageHTML;

}

function switchToState(newState) {
  var stateStr = newState.pagename;
  if (newState.pagename == 'about')
    stateStr += "_" + newState.photoid;
  location.hash = stateStr;
}

function switchToMainPage() {
  switchToState({pagename: 'index'});
}

function switchToAboutPage() {
  switchToState({pagename: 'about'});
}

function switchToProductsPage() {
  switchToState({pagename: 'products'});
}

function switchToProductsPage() {
  switchToState({pagename: 'productsCake'});
}

function switchToContactsPage() {
  switchToState({pagename: 'contacts'});
}

function switchToAddProduct() {
  switchToState({pagename: 'addProduct'});
}

$(document).ready(function() {
  switchToStateFromURLHash();
});
