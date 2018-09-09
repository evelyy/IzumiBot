// + - + - + - + - + - + - + - + - +
// | r | n | b | q | k | b | n | r |
// + - + - + - + - + - + - + - + - +
// | p | p | p | p | p | p | p | p |
// + - + - + - + - + - + - + - + - +
// |   |   |   |   |   |   |   |   |
// + - + - + - + - + - + - + - + - +
// |   |   |   |   |   |   |   |   |
// + - + - + - + - + - + - + - + - +
// |   |   |   |   |   |   |   |   |
// + - + - + - + - + - + - + - + - +
// |   |   |   |   |   |   |   |   |
// + - + - + - + - + - + - + - + - +
// | P | P | P | P | P | P | P | P |
// + - + - + - + - + - + - + - + - +
// | R | N | B | Q | K | B | N | R |
// + - + - + - + - + - + - + - + - +

const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'chess',
      group: 'fun',
      memberName: 'chess',
      description: 'rolls a die'
    });
  }

  async run(message, sides) {
    if (sides) {
        var roll = Math.floor((Math.random() * sides) + 1);
        message.reply("You rolled a " + roll + '!');
    } else {
        var roll = Math.floor((Math.random() * 6) + 1);
        message.reply("You rolled a " + roll + '!');
    }
  }
}

module.exports = Chess;
