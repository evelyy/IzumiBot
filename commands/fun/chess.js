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

function chessBoard() {
    return `\`\`\`+ - + - + - + - + - + - + - + - +\n
    | r | n | b | q | k | b | n | r |\n
    + - + - + - + - + - + - + - + - +\n
    | p | p | p | p | p | p | p | p |\n
    + - + - + - + - + - + - + - + - +\n
    |   |   |   |   |   |   |   |   |\n
    + - + - + - + - + - + - + - + - +\n
    |   |   |   |   |   |   |   |   |\n
    + - + - + - + - + - + - + - + - +\n
    |   |   |   |   |   |   |   |   |\n
    + - + - + - + - + - + - + - + - +\n
    |   |   |   |   |   |   |   |   |\n
    + - + - + - + - + - + - + - + - +\n
    | P | P | P | P | P | P | P | P |\n
    + - + - + - + - + - + - + - + - +\n
    | R | N | B | Q | K | B | N | R |\n
    + - + - + - + - + - + - + - + - +\`\`\``;
}

class ChessCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'chess',
      group: 'fun',
      memberName: 'chess',
      description: 'starts a game of chess'
    });
  }

  async run(message) {
      message.channel.send(chessBoard());
  }
}

module.exports = ChessCommand;
