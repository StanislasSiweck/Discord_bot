const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');

module.exports.run = async (client,message,args) => {
    if(isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply(`Il faut spécifier un **nombre** entre 1 et 100!`);

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0],100),
        before: message.id
    })

    await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: Purge\n **Nbr de message**: ${args[0]}\n**Salon**: ${message.channel}`) 

    client.channels.cache.get(CHANNEL).send(embed);

};

module.exports.help = {    
name : 'purge',
aliases:["purge"],
category: 'moderation',
description : 'Permet de purger un nombre de message',
cooldown: 0,
usage: '<nbr_message>',
isUserAdmin: false,
permissions: true,
args: true,
}