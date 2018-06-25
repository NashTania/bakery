function AbstractView(template) {
  if (template) {
    this.template = template
  }
}

AbstractView.prototype = {
  template: null,

}
