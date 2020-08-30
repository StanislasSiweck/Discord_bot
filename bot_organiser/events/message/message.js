const {Collection} = require('discord.js');
const {PREFIX} = require('../../config');

module.exports = (client,message) => {

    //vérification
    if (message.channel.type === "dm") return client.emit("directMessage",message);
    if(!message.content.startsWith(PREFIX) || message.author.bot) return; // si pas prefix ou bot return

    const args = message.content.slice(PREFIX.length).split(/ +/); //retire le prefix et la commande (?userinfo)
    const commandName = args.shift().toLowerCase(); // prend l'argument (la command)
    const user = message.mentions.users.first();

    //Des aidé pour utilisa la command

    // Prend tout les info de la commande avec son nom ou c'est aliases
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName)); // si trouve pas la commande, regarde les aliases
    if(!command) return;


    if(command.help.permissions && !message.member.hasPermission('KICK_MEMBERS')) return message.reply("Tu n'as pas les permissions pour taper cette commande!"); // si command demande permission et lancer a la permision

    if(command.help.args && !args.length){ // si la command demande un argument et que l'utilisateur n'en donne pas
        let noArgsReply = `Il nous faut des arguments pour cette commande, ${message.author}!`;
    console.log("lol");
        if(command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: \`${PREFIX}${command.help.name} ou ${command.help.aliases} et ${command.help.usage} \``; // ajoute l'aide au noArgsReply

        return message.channel.send(noArgsReply);
    }

    if(command.help.isUserAdmin && !user) return message.channel.send("Il faut mentionner un utilisateur");

    if(command.help.isUserAdmin && message.guild.member(user).hasPermission('KICK_MEMBERS')) return message.reply(`Tu ne peux pas ${command.help.name} un utilisateur avec les permision égale/supérieux a vous`); // si command demande permisison et lancer a la permision (isUserAdmin)

    //Cooldown

    if(!client.cooldowns.has(command.help.name)){ // entre si le user na pas de cooldown
        client.cooldowns.set(command.help.name, new Collection());
    }

    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name); // prend a quelle moment la commande a étais lancer
    const cdAmount = (command.help.cooldown || 0) * 1000;// cooldown en seconde

    if(tStamps.has(message.author.id)){ // si un cd éxiste 
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount; //temps au moment de lancer la commande + cooldown

        if(timeNow < cdExpirationTime){ // si temps now est inférieux a temps + cooldown alors sa entre
            timeLeft = (cdExpirationTime - timeNow) / 1000; // temps réstent
            return message.reply(`Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name},${command.help.aliases}\`.`);
        }
    }

    setTimeout(() => tStamps.delete(message.author.id),cdAmount); //une fois que le cdAmount est passer supp l'id
    tStamps.set(message.author.id,timeNow);//ajoute dans tStamps le user avec le moment de l'utilisation de la commande

    command.run(client,message,args);

    // client.commands.get(command).run(client,message,args) lance la command avec client, l'argument et le message

}