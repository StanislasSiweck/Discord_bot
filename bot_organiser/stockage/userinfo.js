module.exports = {
    name : 'userinfo',
    description : 'renvoie les info',
    execute(client,message,args){
        const user_mention = message.mentions.users.first();
        message.channel.send(`Voici le tag : ${user_mention.tag}`);
    }
}