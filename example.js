
function AbstractController(view, model) {
  if (!model && !view) {
    return
  }
  if (typeof view === 'string') {
    this.view = new AbstractView(view)
  } else {
    this.view = view
  }
  this.model = model

  this.view.setController(this)
}

AbstractController.prototype = {
  template: null,
  view: null,
  renderView: function() {
  },
  renderModel: function(resolve) {
    resolve()
  },
  callPage: function() {
    stateStr = this.template
    return promiseView
  }
}

function MainController() {
  AbstractController.apply(this, arguments)
}

MainController.prototype = new AbstractController()

CartController.prototype.renderView = function () {
  this.sortCart()
}

CartController.prototype.sortCart = function(){

}

function AbstractView(template) {
  if (template) {
    this.template = template
  }
}

AbstractView.prototype = {
  template: null,
  controller: null,
  render: function() {

  }

  setController: function( controller) {
    this.controller = controller
  }
}


function CartView() {
  AbstractView.apply(this, arguments)
}

CartView.prototype = new AbstractView()
