module.exports = {
    name : 'removes',
    description : 'supprimer des rôles',
    execute(client,message,args){
        let role = message.mentions.roles.first();//récupe le role (args = role) (r = user)
        message.mentions.members.forEach(mName => {
            message.mentions.roles.forEach(rName => {
                if(role){
                    if(!mName.roles.cache.has(rName.id)) return message.channel.send(`${mName} posséde pas ce rôle!`);

                    mName.roles.remove(rName)
                        .then(m=>message.channel.send(`${mName} ne possédez plus le role ${rName}.`))
                        .catch(e=> console.log(e));
                }else {
                    message.channel.send(`${rName} n'existe pas.`);
                }
            });
        });
    }
}