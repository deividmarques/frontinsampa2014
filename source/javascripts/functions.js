var project = {};

project.functions = (function() {

  'use strict';

  function init() {
    menuToggle();
  }

  function menuToggle() {
    $('.ico-menu').on('click', function(){
      $('body').toggleClass('menu-visible');
    });
  }

  return {
    init: init
  };

}());

window.onload = function (){
  project.functions.init();
}


