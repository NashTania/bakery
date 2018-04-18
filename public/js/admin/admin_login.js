function login() {
  var login = "admin";
  var password = '111';
  var loginInput = document.getElementById('login');
  var passwordInput = document.getElementById('password');
  if(loginInput.value === login && passwordInput.value === password) {
    document.location.href = 'addProduct.html'
  }
  else {
    alert('неверный логин или пароль');
  }
}
window.onload = function(){
  var button = document.getElementById('login-submit');
  button.addEventListener('click', function(){
    login();
});
}
