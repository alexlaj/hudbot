const messageHandler = (message) => {
  const { content } = message;
  const command = new Command(content);

  if (!command.isReplyable()) {
    return;
  }

  if (command.requiresPlease()) {
    message.reply("What's the magic word?");
    return;
  }

  command.perform();
};

module.exports = messageHandler;
