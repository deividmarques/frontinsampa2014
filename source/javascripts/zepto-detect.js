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
(function ($) {

    /*
     * Detect Suite
     *
     * Tests the client against a variety of modern browser features.
     * These tests are primarily from Mark Pilgrim's "Dive Into HTML5" section
     * "The All-In-One Almost-Alphabetical No-Bullshit Guide to Detecting
     * Everything."
     *
     * You can find "Dive Into HTML5" here: http://www.diveintohtml5.net/
     *
     * "Dive Into HTML5" is protected by (CC BY 3.0):
     * http://creativecommons.org/licenses/by/3.0/
     *
     * @return (boolean) Whether or not the client supports a given feature.
    **/
    function testInput (inputType) {
        var i = document.createElement('input');

        i.setAttribute('type', inputType);

        return i.type !== 'text';
    }

    $.extend($, {
        detect : {
            /*
             * Elements.
            **/
            audio : !!document.createElement('audio').canPlayType,

            canvas : !!document.createElement('canvas').getContext,

            command : 'type' in document.createElement('command'),

            time : 'valueAsDate' in document.createElement('time'),

            video : !!document.createElement('video').canPlayType,

            /*
             * Features and Attributes
            **/
            offline : navigator.hasOwnProperty('onLine') && navigator.onLine,

            appCache : !!window.applicationCache,

            contentEditable : 'isContentEditable' in document.createElement('span'),

            dragDrop : 'draggable' in document.createElement('span'),

            geolocation : !!navigator.geolocation,

            history : !!(window.history && window.history.pushState),

            webSockets : !!window.WebSocket,

            webWorkers : !!window.Worker,

            /*
             * Forms
            **/
            autofocus : 'autofocus' in document.createElement('input'),

            inputPlaceholder : 'placeholder' in document.createElement('input'),

            textareaPlaceholder : 'placeholder' in document.createElement('textarea'),

            inputTypeEmail : testInput('email'),

            inputTypeNumber : testInput('number'),

            inputTypeSearch : testInput('search'),

            inputTypeTel : testInput('tel'),

            inputTypeUrl : testInput('url'),

            /*
             * Storage
            **/
            indexDB : !!window.indexedDB,

            localStorage : 'localStorage' in window && window['localStorage'] !== null,

            webSQL : !!window.openDatabase,

            /*
             * Touch and orientation capabilities.
            **/
            orientation : 'orientation' in window,

            touch : 'ontouchend' in document,

            scrollTop : ('pageXOffset' in window || 'scrollTop' in document.documentElement) && !$.webos,

            /*
             * Propietary features
            **/
            standalone : 'standalone' in window.navigator && window.navigator.standalone
        }
    });


    /*
     * Return (boolean) of likely client device classifications.
    **/
    $.extend($, {
        device : {
            mobile : (screen.width < 768),

            tablet : (screen.width >= 768 && $.detect.orientation),

            desktop : (screen.width >= 800 && !$.detect.orientation)
        }
    });

})(Zepto);
