$(document).ready(function() {
  $(".fadeMe").hide().each(function(i) {
    $(this).delay(i*650).fadeIn(750);
  });

 /*  $(".content").hide().each(function(i) {
    $(this).delay(4*650).fadeIn(100);
  }); */

});
