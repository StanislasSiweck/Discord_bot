const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');
const {MESSAGES} = require("../../util/constants");

module.exports.run = (client,message,args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === "muted");

    if(!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas muté!");

    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> n'est plus muté!`);

    const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.user.id})`)
    .setColor("#35f092")
    .setDescription(`**Action**: Unmute`)
    .setThumbnail(user.user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Par :"+message.author.username, message.author.displayAvatarURL());

    client.channels.cache.get(CHANNEL).send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;