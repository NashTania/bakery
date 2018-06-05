function AddProductModel() {
  AbstractModel.apply(this, arguments);
}
AddProductModel.prototype = new AbstractModel();

AddProductModel.prototype.load = function(resolve) {
  var self = this;
  var promiseModel = new Promise(function(resolve) {
    $.ajax({
      type: "POST",
      url: "https://fe.it-academy.by/AjaxStringStorage2.php",
      data: {
        f: 'READ',
        n: 'tatiana_tkachenko_FD2_cakeStudio_products'
      },
      success: function(response) {
        self.modelStr = response;
        resolve(self)
      }
    })
  })
}
