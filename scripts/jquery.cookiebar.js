/*!
 * jQuery Cookiebar Plugin
 * Forked from: https://github.com/carlwoodhouse/jquery.cookieBar
 *              Copyright 2012, Carl Woodhouse
 *
 * Disclaimer: if you still get fined for not complying with the eu cookielaw, it's not our fault.
 * Licence: MIT
 *
 * Changes include:
 *  Updated to support secure protocol
 *  Removed inline css
 *  Added additional customizable options
 * 
 */

(function( $ ){
    $.fn.cookieBar = function( options ) {
        var settings = $.extend({
            'cookieName': 'cb-enabled',
            'cookieValue': 'cb-accepted',
            'domain': '',
            'path': '/',
            'expires': 30,
            'secure': false,
            'prependElement': 'body'
        }, options);

        return this.each(function () {
            var cookiebar = $(this);

            if ($.cookie(settings.cookieName) != settings.cookieValue) {
                cookiebar.show();
            }

            $('.cookie-bar-close-button').on('click', function () {
                cookiebar.slideUp('fast');
                $.cookie(settings.cookieName, settings.cookieValue,
                    {path: settings.path, secure: settings.secure, domain: settings.domain, expires: settings.expires});
                return false;
            });
        });
    };

    // self injection init
    $.cookieBar = function(options) {
        $(options.prependElement).prepend(
            '<div class="cookie-bar">' +
            '<div class="cookie-message cookie-text">' +
            '<p>' + options.message + '</p>' +
            '<button class="cookie-bar-close-button cookie-text">' +options.closeText+ '</button>' +
            '</div></div>');

        $('.cookie-bar').cookieBar(options);

    };

})(jQuery);


/*!
 * Dependancy:
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {
        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
            if (decode(pair[0]) === key) return decode(pair[1] || '');
        }
        return null;
    };
})(jQuery);
