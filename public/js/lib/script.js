$(document).ready(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');
    callPage(pageRef);

  });

  function callPage(pageRefInput) {
    $.ajax({
      url: pageRefInput,
      type: 'GET',
      dataType: 'text',

      success: function(response) {
        console.log('the page was loaded');
        history.pushState('', '', ('#' + pageRefInput));
        

        $("#main").css("display", "none");
        $('.content').html(response);
        if (pageRefInput === 'products_cake.html') {
          drawingOfCards()
        }
        if (pageRefInput === 'cart.html'){
          renderItemToCard()
        }
      },

      error: function(error) {
        console.log('the page was NOT loaded', error);
      },

      complete: function(xhr, status) {
        console.log("the request is complete!");
      }
    });
  }
})
