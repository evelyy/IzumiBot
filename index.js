const cmdo = require('discord.js-commando');
const client = new cmdo.Client();
const tkn = require('./tokens.json');
const ytdl = require('ytdl-core');
var youtube = require('./youtube.js');   // youtube engine

var ytAudioQueue = [];
var dispatcher = null;

client.registry.registerCommandsIn('./commands/')
client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
