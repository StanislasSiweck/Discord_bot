const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');

module.exports = (client, memeber) => {
    const embed = new MessageEmbed()
    .setAuthor(`${memeber.displayName} (${memeber.id})`, memeber.user.displayAvatarURL())
    .setColor("#35f092")
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();

    client.channels.cache.get(CHANNEL).send(embed);
}