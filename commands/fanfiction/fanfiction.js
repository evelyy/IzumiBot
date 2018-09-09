const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'fanfiction',
      group: 'fanfiction',
      memberName: 'fanfiction',
      description: 'types out a fanfic from our carefully curated library'
    });
  }

  async run(message, args) {
    var flip = Math.floor(Math.random() * 2)    // gets num, either 0 or 1
    if (flip === 0) {
        message.reply('it\'s Heads!')
    } else {
        message.reply('it\'s Tails!')
    }
  }
}

module.exports = CoinFlipCommand;
