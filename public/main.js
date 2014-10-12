var TwitchClient = require("node-twitchtv");

// Load client_id etc.
var account = require("../conf/twitch-api.json");

console.trace(account);

var client = new TwitchClient(account);

console.trace(client);

client.games({ limit: 20, offset: 21 }, function(err, response) {
    console.log(games);
});