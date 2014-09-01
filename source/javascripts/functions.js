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
      if($(this).scrollTop() > 20){
        $body.addClass('menu-fixed');
      } else{
        $body.removeClass('menu-fixed');
      }
    });
  }

  function timelineToggle() {
    $('.list-timeline a').on('click', function(e){
      e.preventDefault();
      //insert show description of speakers
    });
  }

  function menuMobile(){
    $('.area-menu a').on('click', function(e){
      $('body').toggleClass('menu-visible');
    });
  }

  function isMobile(){
    if($.device.mobile || $.device.tablet === true){
      timelineToggle();
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


