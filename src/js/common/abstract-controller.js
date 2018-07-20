import AbstractModel from './abstract-model.js';
import AbstractView from './abstract-view.js';

function AbstractController(view, model) {
  if (!view && !model) {
    return
  }

  if (model === undefined) {
    this.model = new AbstractModel()
  } else {
    this.model = model;
  }

  if (typeof view === 'string') {
    this.view = new AbstractView(view);
  } else {
    this.view = view;
  }

  this.view.setController(this)
}

AbstractController.prototype = {
  run: function() {
    var self = this
    Promise.all([this.view.loadTemplate(), this.model.load()]).then(function () {
      self.view.render()
    })
  }
}

export default AbstractController
