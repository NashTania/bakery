function AddProductController(view, model) {
  AbstractController.apply(this, arguments);
}

AddProductController.prototype = new AbstractController();

// Method isn't named by its functionality


AddProductController.prototype.onClickAddObj = function(event) {
  this.model.addProducts();
//products/cakeB6.jpg

}
