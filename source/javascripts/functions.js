var project = {};

project.functions = (function() {

  'use strict';

  function init() {
    menuToggle();
  }

  function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }

  function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
      while (newClass.indexOf(" " + className + " ") >= 0 ) {
        newClass = newClass.replace( " " + className + " " , " " );
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
      elem.className += ' ' + className;
    }
  }

  function menuToggle() {
    document.querySelector('.ico-menu').onclick = function() {
      var area = document.body;
      toggleClass(area, 'menu-visible');
    }
  }

  return {
    init: init
  };

}());

window.onload = function (){
  project.functions.init();
}


