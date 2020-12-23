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
    pgClient.query(
      `INSERT INTO list_items (list_id, item) VALUES (NULL, '%{item}')`
    );
  }

  return message.reply(`verb: ${verb}\nitem: ${item}`);
};

module.exports = messageHandler;
