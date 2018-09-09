const cmdo = require('discord.js-commando');
const client = new cmdo.Client();
const tkn = require('./tokens.json');
const ytdl = require('ytdl-core');
// var youtube = require('./youtube.js');   // youtube engine

var ytAudioQueue = [];
var dispatcher = null;

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands/')

client.on('message', function(message) {
    var messageParts = message.content.split(' ');
    var command = messageParts[0].toLowerCase();
    var parameters = messageParts.splice(1, messageParts.length);
    console.log(`message was: ${message}`)
});

client.login(tkn.d_token)
