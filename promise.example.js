

class Promise {
  _f: null,

  constructor(f) {
    f(this.z.bind(this))
  },

  z(x) {
    this._f()
  },

  then(f) {
    this._f = f
  }
}

var x = new Promise(function(res) {
  setTimeout(function() { res(3) },1000)
})

x.then(function(z) {
  console.log(z)
})
