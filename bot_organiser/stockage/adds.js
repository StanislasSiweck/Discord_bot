module.exports = {
    name : 'adds',
    description : 'Ajouter plusieur rôles!',
    execute(client,message,args){
        message.mentions.members.forEach(mName => {
            message.mentions.roles.forEach(rName => {
                let role = message.guild.roles.cache.find(r => r.name === rName.name);//récupe le role (args = role) (r = user)
                if(role){
                    if(mName.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce rôle!");
                    if(role.permissions.has('KICK_MEMBERS')) return message.channel.send("Vous ne pouvez pas avoir ce rôle!");
        
                    mName.roles.add(role)
                        .then(m=>message.channel.send(`${mName} possédez maintenant le role ${role}.`))
                        .catch(e=> console.log(e));
                }else {
                    message.channel.send("Le rôle n'existe pas");
                } 
            });
        });
    }
}