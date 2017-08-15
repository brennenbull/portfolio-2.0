
$(window).scroll(function(){
  let dist = $(this).scrollTop();
  if(dist <= 60){
    $('.filler').removeClass('is-showing');
  }

  if(dist > $('.project-gal').offset().top - ($(window).height() / 1.2)) {

    $('.filler').each(function(i){

      setTimeout(function(){
        $('.filler').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);

    });
  }


  if(dist > $('.mid').offset().top - ($(window).height() / 1.2)){
    let x = Math.floor($('.mid').offset().top) - dist;
    $('.skills').css('transform', `translate(${Math.min(0, (-x + 500))}px, 0px )`);

    $('.skills-img').css('transform', `translate(${Math.max(0, (x - 500))}px, 0px)`);
  }

  if(dist > $('.footer').offset().top - ($(window).height() / 1.2) && $(window).width() > 1000){
    let x = Math.floor($('.footer').offset().top) - dist;
    $('.back-img').css('transform', `translate(${Math.min(0, (-x + 500))}px, 0px )`);

    $('.background').css('transform', `translate(${Math.max(0, (x - 500))}px, 0px)`);
  }

});
