import AbstractModel from '../common/abstract-model.js';

function AbstractCartModel() {
  AbstractModel.apply(this, arguments)
}

AbstractCartModel.prototype = new AbstractModel();

AbstractCartModel.prototype.makeid = function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
},

AbstractCartModel.prototype.getCartId = function() {
  var userId = localStorage.getItem('tatiana_tkachenko_FD2_cakeStudio_cart');
  if (!userId) {
    userId = this.makeid();
    localStorage.setItem('tatiana_tkachenko_FD2_cakeStudio_cart', userId)
  }
  return userId;
}

export default AbstractCartModel;
