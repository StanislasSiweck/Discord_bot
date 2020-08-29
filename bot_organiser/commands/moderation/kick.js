const {MessageEmbed} = require("discord.js");

module.exports.run = (client,message,args) => {
    const raison = args.splice(1).join(" ") || 'Aucune raison spécifiée';
    const user = message.mentions.users.first();

    user ? message.guild.member(user).kick(raison) : message.channel.send("L'utilisateur n'existe pas");

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#ffa500")
        .setDescription(`**Action**: Kick\n**Raison**: ${raison}`)
        .setThumbnail(user.displayAvatarURL())
        .setTimestamp()
        .setFooter("Par :"+message.author.username, message.author.displayAvatarURL());

        client.channels.cache.get('727170696773500988').send(embed);
};

module.exports.help = {    
name : 'kick',
aliases:["kick"],
category: 'moderation',
description : 'Permet de kick une peronne',
cooldown: 0,
usage: '<@user> <raison>',
isUserAdmin: true,
permissions: true,
args: true,
}