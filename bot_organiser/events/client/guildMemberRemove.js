const {MessageEmbed} = require("discord.js");

module.exports = (client, memeber) => {
    const embed = new MessageEmbed()
    .setAuthor(`${memeber.displayName} (${memeber.id})`, memeber.user.displayAvatarURL())
    .setColor("#dc143c")
    .setFooter("Un utilisateur a quitté")
    .setTimestamp();

    client.channels.cache.get('727170696773500988').send(embed);
}