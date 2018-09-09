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

  async run(message, sides) {
    if (sides) {
        var roll = Math.floor((Math.random() * sides) + 1);
        message.reply("You rolled a " + roll + '!');
    } else if (typeof sides !== !NaN) {
        message.reply("```");
    }
    } else {
        var roll = Math.floor((Math.random() * 6) + 1);
        message.reply("You rolled a " + roll + '!');
    }
  }
}

module.exports = DiceRollCommand;
