$(document).ready(function(){
  // 메뉴
  var $win = $(window),
      $header = $('.header'),
      $headerOST = $header.offset().top;

  $win.scroll(function(){
    if($(this).scrollTop() > $headerOST){
      /* 윈도우 스크롤한 거리 => $(this).scrollTop() */
      /* $headerOffsetTop => header 위의 영역(70px) */
      $header.addClass('sticky');
    } else {
      $header.removeClass('sticky');
    }
  });

  // 스크롤 - 네비
  var $menu = $('.header-in ul li'),
      $contents = $('#wrap > section');

      $menu.click(function(e){
        e.preventDefault();

        $menu.removeClass('on');
        $(this).addClass('on');

        /*클릭한 요소의 index번호*/
        var idx = $(this).index();

        var $section = $contents.eq(idx);
        /*각 section의 top값 구하기*/
        var $sectionDistance = $section.offset().top;

        $('html, body').animate({scrollTop: $sectionDistance -100 + 'px'});
      });


  $(window).scroll(function(){
     var scltop = $(window).scrollTop();
     $.each($contents, function(idx, item){
       var $target = $contents.eq(idx),
           i = $target.index(),
           targetTop = $target.offset().top;
       if (targetTop <= scltop) {
          $menu.removeClass('on');
          $menu.eq(idx).addClass('on'); }
        if (!(200 <= scltop)) {
           $menu.removeClass('on');
         }
       })
     });

// 스크롤 opacity
  $(window).scroll(function(){
    $('.hideme').each(function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
          bottom_of_window = $(window).scrollTop() + $(window).height();

      if(bottom_of_window > bottom_of_object){
        $(this).animate({'opacity':'1'},150);
      }
    });
  });


// skills animation 구동
  var $about = $('.skills'),
      $offset = 500,
      $aboutOST = $about.offset().top -$offset;

  $(window).scroll(function(){
    if($(this).scrollTop() > $aboutOST ) {
      $about.find('span').addClass('animate');
    }
  });









});
