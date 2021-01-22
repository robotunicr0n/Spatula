const client = require('./discord');
const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
})


const tstream = T.stream('statuses/filter', { follow: '69713509' });
tstream.on('tweet', (tweet) => {
  if (tweet.retweeted_status) return;
  let msg = "**Tweet:** " + tweet.text;

  let channel = client.channels.get('480137199350710305'); // Master Ravenwood, general chat
  if (channel) channel.send(msg);

  channel = client.channels.get('440601976804343808'); // Lusternia Unofficial, general chat
  if (channel) channel.send(msg);

  channel = client.channels.get('766449729562738728'); // Lusternia Official, twitter
  if (channel) channel.send(msg);
  
  // Send direct to user
  user = client.users.get('179096562809569282').send(msg);
  /* This could be extended to use a file to store user ids of individuals wanting direct message updates */

  /*channel = client.channels.get('378176979826114562'); // Selune, bot-tomfoolery
  if (channel) channel.send(msg);*/
})

module.exports = T;
