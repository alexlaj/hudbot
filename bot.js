const Discord = require("discord.js");
const messageHandler = require("./src/messageHandler.js");
const { exit } = require("process");
const pg = require("pg");

const pgClient = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
pgClient.connect();
const discordClient = new Discord.Client();

discordClient.on("ready", () => {
  console.log("🚀 H U D B O T is ready for action 🚀");
});

discordClient.on("message", (message) => messageHandler(message, pgClient));

if (!process.env.BOT_TOKEN) {
  console.error(
    "BOT_TOKEN is a required environment variable, but was not supplied."
  );
  exit(1);
}

discordClient.login(process.env.BOT_TOKEN);
