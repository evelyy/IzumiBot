const cmdo = require('discord.js-commando');
const client = new cmdo.Client();
const tkn = require('./tokens.json');
const ytdl = require('ytdl-core');
// var youtube = require('./youtube.js');   // youtube engine

var ytAudioQueue = [];
var dispatcher = null;

client.registry.registerGroups([
    ['random', 'Random'],
    ['fanfiction', 'Fanfiction'],
    ['fun', 'Fun']
]);
client.registry.registerGroup('fanfiction', 'Fanfiction');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands/')

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on('message', function(message) {
    var messageParts = message.content.split(' ');
    var command = messageParts[0].toLowerCase();
    var parameters = messageParts.splice(1, messageParts.length);
    console.log(`message was: ${message}`)
});

client.login(tkn.d_token)
