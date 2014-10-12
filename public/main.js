var jsdom = require('jsdom'),
    fs = require('fs'),
    jsrepl = fs.readFileSync('../library/external/twitch-js-sdk/twitch-js-sdk.js', 'utf8');

// Load client_id etc.
var config = require("../conf/twitch-api.json");

Twitch.init({clientId: config.client_id}, function(error, status) {
    // the sdk is now loaded
});