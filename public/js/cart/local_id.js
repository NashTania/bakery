function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function getCartId() {
  var userId = localStorage.getItem('tatiana_tkachenko_FD2_cakeStudio_cart');
  if (!userId) {
    userId = makeid();
    localStorage.setItem('tatiana_tkachenko_FD2_cakeStudio_cart', userId)
  }
  return userId;
}
getCartId();
