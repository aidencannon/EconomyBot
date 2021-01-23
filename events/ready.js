module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
  client.user.setActivity(`p!help | Accessing ${client.guilds.cache.size} Users!`);
};
