const Command = require("./Command/Command");

const messageHandler = (message) => {
  const command = new Command(message.content);

  if (!command.isReplyable()) {
    return;
  }

  if (command.requiresPlease()) {
    message.reply("What's the magic word?");
    return;
  }

  const { verb, item } = command.parameterizedCommand();

  return message.reply(`verb: ${verb}\nitem: ${item}`);
};

module.exports = messageHandler;
