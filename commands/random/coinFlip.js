const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'flip',
      group: 'random',
      memberName: 'flip',
      description: 'flips a coin'
    });
  }

  async run(message) {
    var flip = Math.floor(Math.random() * 2)    // gets num, either 0 or 1
    if (flip === 0) {
        message.reply('it\'s Heads!')
    } else {
        message.reply('it\'s Tails!')
    }
  }
}

module.exports = CoinFlipCommand;
