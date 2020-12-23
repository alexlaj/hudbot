const Command = require("./Command/Command");

const messageHandler = (message, pgClient) => {
  const command = new Command(message.content);

  if (!command.isReplyable()) {
    return;
  }

  if (command.requiresPlease()) {
    message.reply("What's the magic word?");
    return;
  }

  const { verb, item } = command.parameterizedCommand();

  if (verb == Command.ADD) {
    pgClient
      .query(`INSERT INTO list_items (item) VALUES ('${item}')`)
      .then((result) => {
        message.react("✔️");
      });
  }

  return message.reply(`verb: ${verb}\nitem: ${item}`);
};

module.exports = messageHandler;
