module.exports.run = (client,message,args) => {
    message.channel.send(args.join(" "));
};

module.exports.help = {    
    name : 'say',
    aliases: ["rep","dis"],
    category: 'misc',
    description : "Répéte le message d'un user",
    usage: "Vous devez mettre un message",
    cooldown: 10,
    isUserAdmin: false,
    permissions: false,
    args: true
}