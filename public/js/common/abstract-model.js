function AbstractModel() {}

AbstractModel.prototype = {
  load: function(resolve) {
    return new Promise(function(resolve) { // Return promise directly
      resolve()
    })
  },

  sendRequest: function(key, value) { // move to abstract model
    $.ajax({
      type: "POST",
      url: "https://fe.it-academy.by/AjaxStringStorage2.php",
      data: {
        f: 'READ',
        n: key
      },
      success: function(data) {
        if (data.result) {
          $.ajax({
            type: "POST",
            url: "https://fe.it-academy.by/AjaxStringStorage2.php",
            data: {
              f: 'LOCKGET',
              n: key,
              p: '111'
            },
            success: function() {
              $.ajax({
                type: "POST",
                url: "https://fe.it-academy.by/AjaxStringStorage2.php",
                data: {
                  f: 'UPDATE',
                  n: key,
                  p: '111',
                  v: JSON.stringify(value)
                }
              })
            }
          })
        } else {
          $.ajax({
            type: "POST",
            url: "https://fe.it-academy.by/AjaxStringStorage2.php",
            data: {
              f: 'INSERT',
              n: key,
              v: JSON.stringify(value)
            }
          })
        }
      },
      error: function() {
        $.ajax({
          type: "POST",
          url: "https://fe.it-academy.by/AjaxStringStorage2.php",
          data: {
            f: 'INSERT',
            n: key,
            v: JSON.stringify(value)
          }
        })
      }
    })
  }

}
