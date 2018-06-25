function AbstractController(template, view, model) {
  if (!view && !model) {
    return
  }
  this.model = model;
}

AbstractController.prototype = {
  template: null,
  view: null,
  renderView: function() {},

  renderModel: function(resolve) {
    resolve()
  },

  callPage: function(template, resolve) {
    var promiseView = null;
    if (!this.view) {
      promiseView = new Promise(function(resolve) {
        if (!template) {
          return;
        } else {
          $.ajax({
            url: template,
            type: 'GET',
            dataType: 'text',
            success: function(data, resolve) {
              this.view = data;
              resolve(this.view)
            }
          })
        }
      })
    } else {
      promiseView = new Promise(function(resolve) {
        resolve(this.view);
      })
    }
    return promiseView
  }
}

  function MainController(template) {
    AbstractController.apply(this, arguments);
  }
  MainController.prototype = new AbstractController();

  function AboutController(template) {
    AbstractController.apply(this, arguments);
  }
  AboutController.prototype = new AbstractController();

  function ProductsController(template) {
    AbstractController.apply(this, arguments);
  }
  ProductsController.prototype = new AbstractController();

  function ContactsController(template) {
    AbstractController.apply(this, arguments);
  }
  ContactsController.prototype = new AbstractController();

  /*  function(template, resolve) {
    var promiseView = null;
    if (!this.view) {
      promiseView = new Promise(function(resolve) {
        if (!template) {
          return;
        } else {
          $.ajax({
            url: template,
            type: 'GET',
            dataType: 'text',
            success: function(data) {
              this.view = data;
              resolve(this.view)
            }
          })
        }
      })
    } else {
      promiseView = new Promise(function(resolve) {
        resolve(this.view);
      })
    }

    return promiseView */
