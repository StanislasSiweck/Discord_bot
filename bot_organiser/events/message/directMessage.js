const {MessageEmbed} = require("discord.js");
const {CHANNEL} = require('../../config');

module.exports = (client,message) => {
    const user = message.author;
    if(user.bot) return;

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: Ouverture de ticket\n**Raison**: ${message.content}\nUtilisateur:${user}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter("Par :"+user.username, user.avatarURL());

    user.send("Nous avons reçu votre ticket,on vous répondra des que possible!")
    client.channels.cache.get(CHANNEL).send(embed);
}