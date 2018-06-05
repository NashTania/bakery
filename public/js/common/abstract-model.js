function AbstractModel() {}

AbstractModel.prototype = {
  load: function(resolve) {
    var promiseModel = new Promise(function(resolve) {
      resolve()
    })
    return promiseModel
  }

}
