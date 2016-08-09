$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").toggle();
   });
   $(".click2").click(function() {
     $("#showText").fadeToggle();
     $("#hideText").toggle();
   });
  });
