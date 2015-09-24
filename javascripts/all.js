/*
 * Zepto.Detect
 *
 * @version 1.0
 *
 * Copyright (c) 2012 Daniel Lacy (daniellacy.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
**/
!function(e){function n(e){var n=document.createElement("input");return n.setAttribute("type",e),"text"!==n.type}e.extend(e,{detect:{audio:!!document.createElement("audio").canPlayType,canvas:!!document.createElement("canvas").getContext,command:"type"in document.createElement("command"),time:"valueAsDate"in document.createElement("time"),video:!!document.createElement("video").canPlayType,offline:navigator.hasOwnProperty("onLine")&&navigator.onLine,appCache:!!window.applicationCache,contentEditable:"isContentEditable"in document.createElement("span"),dragDrop:"draggable"in document.createElement("span"),geolocation:!!navigator.geolocation,history:!(!window.history||!window.history.pushState),webSockets:!!window.WebSocket,webWorkers:!!window.Worker,autofocus:"autofocus"in document.createElement("input"),inputPlaceholder:"placeholder"in document.createElement("input"),textareaPlaceholder:"placeholder"in document.createElement("textarea"),inputTypeEmail:n("email"),inputTypeNumber:n("number"),inputTypeSearch:n("search"),inputTypeTel:n("tel"),inputTypeUrl:n("url"),indexDB:!!window.indexedDB,localStorage:"localStorage"in window&&null!==window.localStorage,webSQL:!!window.openDatabase,orientation:"orientation"in window,touch:"ontouchend"in document,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement)&&!e.webos,standalone:"standalone"in window.navigator&&window.navigator.standalone}}),e.extend(e,{device:{mobile:screen.width<768,tablet:screen.width>=768&&e.detect.orientation,desktop:screen.width>=800&&!e.detect.orientation}})}(Zepto);var project={};project.functions=function(){"use strict";function e(){n(),t(),a(),c(),i()}function n(){$(".ico-menu").on("click",function(){$("body").toggleClass("menu-visible")})}function t(){$(window).scroll(function(){var e=$("body");$(this).scrollTop()>1?e.addClass("menu-fixed"):e.removeClass("menu-fixed")})}function o(){$(".area-menu a").on("click",function(){$("body").toggleClass("menu-visible")})}function i(){($.device.mobile||$.device.tablet===!0)&&o()}function a(){$(".area-intro").on("click",function(){$("body").addClass("menu-fixed")})}function c(){setTimeout(function(){$("body").addClass("menu-fixed")},1500)}return{init:e}}(),window.onload=function(){project.functions.init()};