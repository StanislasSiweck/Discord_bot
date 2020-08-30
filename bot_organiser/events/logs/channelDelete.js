const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');

module.exports = async (client, channel) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE'
    });

    const latestChannelDelete = fetchGuildAuditLogs.entries.first();
    const {executor} = latestChannelDelete;

    const embed = new MessageEmbed()
    .setAuthor(`Supprésion d'un salon`)
    .setColor("#fd7aff")
    .setDescription(`**Action**: Supprésion de salon\n**Salon supp**: ${channel.name}`)
    .setTimestamp()
    .setFooter(executor.username, executor.avatarURL());

    client.channels.cache.get(CHANNEL).send(embed);
}