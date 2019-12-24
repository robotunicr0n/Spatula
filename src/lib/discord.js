const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on(`message`, msg => {
  if (msg.content.indexOf("!") == 0) {
    // Handle commands
  }
})

module.exports = client;
