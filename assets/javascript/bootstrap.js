window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

// Load Jquery lib
// window.$ = window.jQuery = require("jquery");

// Load scrollnav
window.scrollnav = require("scrollnav");

// Load slick-carousel
// require("slick-carousel");

// Load jquery-slinky
require("jquery-slinky");

// Load pagination
window.List = require("list.js");

// Load jbox
window.jBox = require("jbox");

// Load moment.js
// window.moment = require("moment");
