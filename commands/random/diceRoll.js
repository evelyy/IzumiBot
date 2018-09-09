const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'rolls a die'
    });
  }

  async run(message, args) {
    var roll = Math.floor(Math.random() * 6) + 1; // basically rolls a six sided die
    message.reply("You rolled a " + roll);
  }
}

module.exports = DiceRollCommand;
