var project = {};

project.functions = (function() {

  'use strict';

  function init() {
    menuToggle();
    menuFixed();
    isMobile();
  }

  function menuToggle() {
    $('.ico-menu').on('click', function(){
      $('body').toggleClass('menu-visible');
    });
  }

  function menuFixed(){
    $(window).scroll(function(){
      var $body = $('body');
      if($(this).scrollTop() > 5){
        $body.addClass('menu-fixed');
      } else{
        $body.removeClass('menu-fixed');
      }
    });
  }

  function menuMobile(){
    $('.area-menu a').on('click', function(e){
      $('body').toggleClass('menu-visible');
    });
  }

  function isMobile(){
    if($.device.mobile || $.device.tablet === true){
      menuMobile();
    }
  }

  return {
    init: init
  };

}());

window.onload = function (){
  project.functions.init();
}


