$(function(){
    $('.slider').slick({
        slidesToShow: 1, // толкьо 1 слайд показывать одновременно
        slidesToScroll: 1, // по 1-му слайду проскролливать
        speed: 5000, // медленная смена слайдов - скорость бегущей строки
        autoplay: true, // устанавливаем автозапуск слайдера
        autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
        cssEase: 'linear', // делаем анимацию однотонной при смене слайда
        variableWidth: true, // растояние между слайдами убрал
        prevArrow: false,
        nextArrow: false,
    });



    $('.menu-btn').on('click', function(){
      $('.dropdown-child').toggleClass('active');
      $('.menu-btn').toggleClass('menu-btn_active');
    });

      // $(document).mouseup(function(e) {
      //   var $target = $(e.target);
      //   if ($target.closest("#body").length == 0) {
      //       $(".dropdown-child").removeClass("active");
      //   }
      // });

      new WOW().init();
});
