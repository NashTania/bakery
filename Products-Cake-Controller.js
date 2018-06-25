function ProductsCakeController(view, model) {
  AbstractController.apply(this, arguments);
}
ProductsCakeController.prototype = new AbstractController();


ProductsCakeController.prototype.renderView = function(data) {
  var viewProducts = new ProductsCakeView();
  viewProducts.renderView(data)
}

ProductsCakeController.prototype.renderModel = function(resolve) {
  var modelProducts =  new ProductsCakeModel();
  modelProducts.renderModel(resolve)
}
