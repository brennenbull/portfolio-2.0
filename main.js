$(window).scroll(function(){
  let dist = $(this).scrollTop();

  if(dist > $('.project-gal').offset().top - ($(window).height() / 1.2)) {

    $('.filler').each(function(i){

      setTimeout(function(){
        $('.filler').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);

    });
  }

});
