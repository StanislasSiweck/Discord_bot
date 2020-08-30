const {MessageEmbed} = require("discord.js");

module.exports.run = (client,message,args) => {
    const userRole = message.guild.roles.cache.get("744965280534495234");
    const memberRole = message.guild.roles.cache.get("744965331449151598");
    const userEmoji = '❤️';
    const memberEmoji = '👌';
    console.log(args[0]);
    console.log(args[1]);

    const embed = new MessageEmbed()
    .setTitle("Roles")
    .setDescription("Cliquer sur une réation ci-dessous pour obtenire le rôle correspondant")
    .setColor("#dc143c")
    .addField(
        `Les roles disponibles: `,
        `
        ${userEmoji} - ${userRole.toString()}
        ${memberEmoji} - ${memberRole.toString()}
        `
    )

    client.channels.cache.get('727162894361427971').send(embed).then(async msg => {
        await msg.react(userEmoji);
        await msg.react(memberEmoji);
    })
};

module.exports.help = {    
name : 'allroles',
aliases:["allroles"],
category: 'reactions',
description : 'Renvoie un message avec des reactions',
cooldown: 10,
usage: '',
isUserAdmin: false,
permissions: true,
args: false,
}