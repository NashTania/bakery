function AddProductView() {
  AbstractView.apply(this, arguments)
  this.template = 'add-product.html';
}
AddProductView.prototype = new AbstractView();

AddProductView.prototype.renderView = function(){
 //this.controller.view.renderView(this.controller.model.load())
  var self = this;

    $('#submit-obj-add').click(function(event) {
    console.log(self.controller)
    self.controller.onClickAddObj();

  })
}      
