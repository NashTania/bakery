$(document).ready(function() {
  $('a').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef);

  });

  function callPage(pageRefInput, drawingOfCards) {
    $.ajax({
      url: pageRefInput,
      type: 'GET',
      dataType: 'text',

      success: function(response,drawingOfCards) {
        console.log('the page was loaded');
        $("#main").css("display", "none");
        $('.content').html(response);
        if(drawingOfCards){
          setTimeout (function(){
            drawingOfCards()
            }, 50)
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
