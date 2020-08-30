const { Message } = require("discord.js");

module.exports = (client,messageReaction,user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '727162894361427971');

    const userRole = message.guild.roles.cache.get("744965280534495234");
    const memberRole = message.guild.roles.cache.get("744965331449151598");

    if(member.user.bot) return;

    if(['❤️','👌'].includes(emoji) && message.channel.id === channel.id){
        switch(emoji){
            case '❤️':
                member.roles.add(userRole);
                message.channel.send("Role add 1");
                break;
            
            case '👌':
                member.roles.add(memberRole);
                message.channel.send("Role add 2");
                break;
        }
    }
}