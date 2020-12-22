const Discord = require("discord.js");
const messageHandler = require("./src/messageHandler.js");
const { exit } = require("process");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("hudbot is ready for action");
});

client.on("message", (message) => messageHandler(message));

if (!process.env.BOT_TOKEN) {
  console.error(
    "BOT_TOKEN is a required environment variable, but was not supplied."
  );
  exit(1);
}

client.login(process.env.BOT_TOKEN);
