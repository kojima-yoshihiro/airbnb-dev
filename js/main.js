$(function () {

  //mobileMenuをクリックすると、
  jQuery(".mobileMenu").on("click", function () {
    //arrowにonクラスが付いたり消えたりする！
    // onクラスにはactiveで回転するように指定してある。
    jQuery(".mobileMenu__arrow").toggleClass("on");
    //bodyにopenクラスが付いて、全画面にglobal-navが出てくる
    jQuery("body").toggleClass("open");
    //top-togglerにchange-colorクラスが付いて、色が変わる
    jQuery(".mobileMenu__toggle").toggleClass("change-color");
  });


  $('.js-modal-open').on('click', function () {
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});
