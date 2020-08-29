const {MessageEmbed} = require("discord.js");

module.exports = {
    name : 'embed',
    description : 'Crée une embed',
    execute(client,message,args){
        const embed = new MessageEmbed()
        .setColor("#dc163c")
        .setTitle("Titre de l'embed")
        .setURL("https://google.com")
        .setDescription("Un description")
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Je suis un champ", "et je suis sa valeur")
        .addFields(
            {name : 'je suis le camp 1', value: 'et je suis sa valuer', inline:true},
            {name : 'je suis le camp 2', value: 'et en plus on est aligné', inline:true}
        )
        .setImage(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("Je suis le pied du footer");

        message.channel.send(embed);
    }
}