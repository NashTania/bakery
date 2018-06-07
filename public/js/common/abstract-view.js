function AbstractView(template) {
  if (template) {
    this.template = template
  }
}

AbstractView.prototype = {
  template: null,
  renderView: function() {},

  setController: function(controller) {
    this.controller = controller
  },

  loadTemplate: function() {
    var promiseView = null;
    var self = this;
    if (!self.viewStr) {
      if (!this.template) {
        new Promise(function(resolve, reject) {
          reject('Template is not specified')
        })
        return
      }
      return promiseView = new Promise(function(resolve) {
        $.ajax({
          url: self.template,
          type: 'GET',
          dataType: 'text',
          success: function(response) {
            self.viewStr = response;
            resolve(self)
          }
        })
      })
    }
    return promiseView = new Promise(function(resolve) {
      resolve(self);
    })
  },

  render: function() {
      $("#main").css("display", "none");
      $('.content').html(this.viewStr);
      this.renderView()

  }
}
