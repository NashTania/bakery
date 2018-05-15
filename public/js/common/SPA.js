window.onhashchange = switchToStateFromURLHash;
var SPAState = {};

function switchToStateFromURLHash(resolve) {
  var _resolve = null;
  if(typeof resolve === 'function'){
    _resolve = resolve;
  }
  var URLHash = window.location.hash;
  var stateStr = URLHash.substr(1);

  var stateObj = SPAState[stateStr];
/*  var viewPromise = null;
  if (!stateObj.view) {
    viewPromise = new Promise((resolve) => {
      callPage(stateStr, (content) => {
        stateObj.view = content;
        resolve(stateStr);
      })
    })
  } else {
    viewPromise = new Promise(resolve => resolve(stateStr));
  }

  Promise.all([stateObj.loadModel(),viewPromise]).then((args) => {
    $("#main").css("display", "none");
    $('.content').html(stateObj.view);
    stateObj.renderView(args[0]);
  })*/


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
