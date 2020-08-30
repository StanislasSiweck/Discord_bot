const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');
const {MESSAGES} = require("../../util/constants");

module.exports.run = (client,message,args) => {
    const raison = args.splice(1).join(" ") || 'Aucune raison spécifiée';
    const user = message.mentions.users.first();

    user ? message.guild.member(user).ban(raison) : message.channel.send("L'utilisateur n'existe pas");

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: Ban\n**Raison**: ${raison}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get(CHANNEL).send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;