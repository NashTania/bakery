function sendRequest(key, value) {
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
