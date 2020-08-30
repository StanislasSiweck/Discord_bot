const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');
const {MESSAGES} = require("../../util/constants");

module.exports.run = async (client,message,args) => {
    let user = message.guild.member(message.mentions.users.first());
    
    if(isNaN(args[1]) || (args[1] < 1 || args[1] > 1000)) return message.reply(`Il faut spécifier un **nombre** entre 1 et 100!`);

    const messages = (await message.channel.messages.fetch({
        limit:100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length = Math.min(args[1],messages.length);

    if(message.length === 0 || !user) return message.reply('Aucun message a supp sur cette utilisateur');

    if(messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);
    message.delete();

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: Prune\n **Nbr de message**: ${args[1]}\n**User**: ${args[0]}`) 

    client.channels.cache.get(CHANNEL).send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.PRUNE;