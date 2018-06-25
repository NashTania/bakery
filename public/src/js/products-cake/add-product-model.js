import AbstractModel from '../common/abstract-model.js';

function AddProductModel() {
  AbstractModel.apply(this, arguments);
}
AddProductModel.prototype = new AbstractModel();

AddProductModel.prototype.load = function(resolve) {
  var self = this;
  return new Promise(function(resolve) {
    $.ajax({
      type: "POST",
      url: "https://fe.it-academy.by/AjaxStringStorage2.php",
      data: {
        f: 'READ',
        n: 'tatiana_tkachenko_FD2_cakeStudio_products'
      },
      success: function(response) {
        var products = JSON.parse(response.result);
        self.data = products; // modelStr property isn't defined in the model class
        // modelStr name doesn't make sens (it's hash array and it's data)
        resolve(self)
      }
    })
  })
}


export default AddProductModel;
