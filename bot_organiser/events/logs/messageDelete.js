const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');

module.exports = async (client, message) => {
    const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE'
    });
    const latestMessageDelete = fetchGuildAuditLogs.entries.first();
    const {executor} = latestMessageDelete;

    const embed = new MessageEmbed()
    .setAuthor(`Supprésion d'un message`)
    .setColor("#fd7aff")
    .setDescription(`**Action**: Supprésion d'un message'\n**Message supp**: ${message.content}\n **Auteur du message**: ${message.author}`)
    .setTimestamp()
    .setFooter(executor.username, executor.avatarURL());

    client.channels.cache.get(CHANNEL).send(embed);
}