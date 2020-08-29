module.exports.run = (client,message,args) => {
        message.channel.send("Pong");
};

module.exports.help = {    
    name : 'ping',
    aliases:["p"],
    category: 'misc',
    description : 'pong',
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false,
}