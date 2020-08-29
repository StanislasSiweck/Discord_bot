module.exports = {
    name : 'remove',
    description : 'supprimer un rôle',
    execute(client,message,args){
        let role = message.mentions.roles.first();//récupe le role (args = role) (r = user)
        console.log(args);
        if(role){
            if(!message.member.roles.cache.has(role.id)) return message.channel.send("Vous ne possédez pas ce rôle!");

            message.member.roles.remove(role)
                .then(m=>message.channel.send(`Vous possédez plus le role ${role}.`))
                .catch(e=> console.log(e));
        }else {
            message.channel.send("Vous ne pouvez pas enlever un role qui n'existe pas !");
        }
    }
}