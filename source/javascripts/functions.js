var project = {};

project.functions = (function() {

  'use strict';

  function init() {
    menuToggle();
    menuFixed();
    start();
    delayStart();
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
      if($(this).scrollTop() > 1){
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

  function start(){
    $('.area-intro').on('click',function(){
      $('body').addClass('menu-fixed');
    })
  }

  function delayStart(){
    setTimeout(function(){
      $('body').addClass('menu-fixed');
    }, 1500);
  }

  return {
    init: init
  };

}());

window.onload = function (){
  project.functions.init();
}


