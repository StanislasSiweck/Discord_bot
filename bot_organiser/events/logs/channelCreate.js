const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');

module.exports = async (client, channel) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE'
    });

    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const {executor} = latestChannelCreated;

    const embed = new MessageEmbed()
    .setAuthor(`Création d'un nouveaux salon`)
    .setColor("#ffa500")
    .setDescription(`**Action**: Création de salon\n**Salon créé**: ${channel.name}`)
    .setTimestamp()
    .setFooter(executor.username, executor.avatarURL());

    client.channels.cache.get(CHANNEL).send(embed);
}