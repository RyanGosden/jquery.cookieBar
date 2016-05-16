/**
 * Created by ryangosden on 4/25/16.
 */

$(document).ready(function() {

    var secureProtocol;

    if (window.location.protocol === "https:") {
        secureProtocol = 'secure';
    }
    else {
        secureProtocol = false;
    }

    $.cookieBar({
        'cookieName': 'cb-enabled',
        'cookieValue': 'accepted',
        domain:'',
        'path': '/',
        'expires': 365,
        secure: secureProtocol,
        'prependElement': 'body',
        'message': 'This site uses cookies.<br> By using this site, you agree to these revised documents including the use of cookies to enhance your experience.',
        'closeText': 'Close'
    });

});
