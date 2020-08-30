const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');

module.exports.run = async (client,message,args) => {
    const user = await client.users.fetch(args[0]);
    if(!user){
        return message.reply("L'utilisateur n'existe pas");
    }
    
    message.guild.members.unban(user); 

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`,user.avatarURL())
    .setColor("#35f092")
    .setDescription(`**Action**: UnBan`)
    .setThumbnail()
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get(CHANNEL).send(embed);

};

module.exports.help = {    
name : 'unban',
aliases:["unban","ub"],
category: 'moderation',
description : 'Permet de unmban une peronne',
cooldown: 0,
usage: '<user_id>',
isUserAdmin: false,
permissions: true,
args: true,
}