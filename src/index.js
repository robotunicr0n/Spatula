require('dotenv').config()
const client = require('./lib/discord');
const T = require('./lib/twitter')

client.login(process.env.DISCORD_ACCESS_TOKEN);
