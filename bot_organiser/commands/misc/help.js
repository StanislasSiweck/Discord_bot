const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const {readdirSync} = require("fs");
const catagoryList = readdirSync("./commands");

module.exports.run = (client,message,args) => {
    if(!args.length){
        const embed = new MessageEmbed()
        .setColor('#36393F')
        .addField("Liste des commandes",`Une liste de touts les sous-catégories disponibles et commandes\nPour plus d'info sur une commande,taper\`${PREFIX}help <command_name>\``)

        for(const category of catagoryList){
            embed.addField(
                `${category}`,
                `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
            );
        }
        return message.channel.send(embed);
    }else{
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0])); // si trouve pas la commande, regarde les aliases
        if(!command) return message.reply("Cette commande n'existe pas!");

        const embed = new MessageEmbed()
        .setColor('#36393F')
        .setTitle(`\`${command.help.name}\``)
        .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs)`)
        .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

        if(command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);

        return message.channel.send(embed);
    }
};

module.exports.help = {    
    name : 'help',
    aliases: ["help"],
    category: 'misc',
    description : "Renvoie une liste de commande ou les info d'une commande",
    usage: "<commande_name>",
    cooldown: 2,
    isUserAdmin: false,
    permissions: false,
    args: false
}