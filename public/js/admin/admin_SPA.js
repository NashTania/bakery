window.onhashchange = switchToStateFromURLHash;
var SPAState = {};

function switchToStateFromURLHash(resolve) {
  var _resolve = null;
  if(typeof resolve === 'function'){
    _resolve = resolve;
  }
  var URLHash = window.location.hash;
  var stateStr = URLHash.substr(1);

  if (SPAState[stateStr] != undefined) {
    $("#main").css("display", "none");
    $('.content').html(SPAState[stateStr]);
    if (_resolve) {
      _resolve(stateStr);
    }
  } else {
    callPage(stateStr, _resolve);
  }


  console.log('Новое состояние приложения:');

}
