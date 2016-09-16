$(document).ready(function() {

   $("td").on(
        "mouseenter", function(){
         $(this).fadeTo(500, 0.5);
         $(this).children("h3").fadeIn(500);
      }).on("mouseleave", function(){
      $(this).fadeTo(500, 1); //How to remove text?
      $("h3").fadeOut(500);
  });
 })

