$(document).ready(function(){
  $('.menutab').click(function(){
    var toggling = $('.mainmenu').css('display');
      if (toggling = 'none'){
        $('.mainmenu').slideToggle(1000);
        $('.navigation').animate({bottom: "-=150px"});
        $("body").css({'opacity':'0.4'});
        toggling = 'block';
    }
    else{
     $('.mainmenu').slideToggle(1000);
      $(this).css({'z-index':'0', 'opacity':'1'}, 4)
      $('.navigation').animate({bottom: "+=150px"});
      toggling = 'none';
      $("body").css({'z-index':'1', 'opacity':'1'})
    }
  })
})


   //$("a").on('click', function(){
   // console.log('click'); //The rest of the commands, at present, are not working.  If they are, they are being reverted to the show# view.
    //$(".wrapper").fadeTo(200,0.2); //opacity
    //$(".hidden").css("display","inline").fadeIn(5000,0.8);
    //$(".hidden").on('click', function(event) {
      //$(".hidden").fadeOut(200).remove(); //remove put in there to confirm that it will disappear from the page - opposite of 'append'
      //$(".wrapper").fadeTo(200,1);
    //});
 // });

