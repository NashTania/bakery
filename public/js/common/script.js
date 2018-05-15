function callPage(pageRefInput, resolve) {
  if (!pageRefInput) {
    return;
  } else {
    $.ajax({
      url: pageRefInput,
      type: 'GET',
      dataType: 'text',

      success: resolve
    /*  function(response) {

        $("#main").css("display", "none");
        $('.content').html(response);
        SPAState[pageRefInput] = response;
        if (resolve) {
          resolve(pageRefInput);
        }
      },

      error: function(error) {
        console.log('the page was NOT loaded', error);
      },

      complete: function(xhr, status) {
        console.log("the request is complete!");
      }*/
    });
  }
}
