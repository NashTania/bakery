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
    var self = this;
    if (!this.viewStr) {
      if (!this.template) {
        return Promise.reject('Template is not specified')
      }

      return new Promise(function(resolve) {
        $.ajax({
          url: './public/' + self.template,
          type: 'GET',
          dataType: 'text',
          success: function(response) {
            self.viewStr = response;
            resolve(self)
          }
        })
      })
    }

    return Promise.resolve(this)
  },

  render: function() {
      $("#main").css("display", "none");
      $('.content').html(this.viewStr);
      this.renderView()
  }
}

export default AbstractView;
