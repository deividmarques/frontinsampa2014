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
!function(e){function t(e){var t=document.createElement("input");return t.setAttribute("type",e),"text"!==t.type}e.extend(e,{detect:{audio:!!document.createElement("audio").canPlayType,canvas:!!document.createElement("canvas").getContext,command:"type"in document.createElement("command"),time:"valueAsDate"in document.createElement("time"),video:!!document.createElement("video").canPlayType,offline:navigator.hasOwnProperty("onLine")&&navigator.onLine,appCache:!!window.applicationCache,contentEditable:"isContentEditable"in document.createElement("span"),dragDrop:"draggable"in document.createElement("span"),geolocation:!!navigator.geolocation,history:!(!window.history||!window.history.pushState),webSockets:!!window.WebSocket,webWorkers:!!window.Worker,autofocus:"autofocus"in document.createElement("input"),inputPlaceholder:"placeholder"in document.createElement("input"),textareaPlaceholder:"placeholder"in document.createElement("textarea"),inputTypeEmail:t("email"),inputTypeNumber:t("number"),inputTypeSearch:t("search"),inputTypeTel:t("tel"),inputTypeUrl:t("url"),indexDB:!!window.indexedDB,localStorage:"localStorage"in window&&null!==window.localStorage,webSQL:!!window.openDatabase,orientation:"orientation"in window,touch:"ontouchend"in document,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement)&&!e.webos,standalone:"standalone"in window.navigator&&window.navigator.standalone}}),e.extend(e,{device:{mobile:screen.width<768,tablet:screen.width>=768&&e.detect.orientation,desktop:screen.width>=800&&!e.detect.orientation}})}(Zepto);