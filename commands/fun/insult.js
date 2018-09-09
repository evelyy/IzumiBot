const commando = require('discord.js-commando');

class InsultMeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'insult',
      group: 'fun',
      memberName: 'insult',
      description: 'insults the user'
    });
  }

  async run(message) {
    message.channel.send(`${message.author} is gay lol`)
  }
}

module.exports = InsultMeCommand;
