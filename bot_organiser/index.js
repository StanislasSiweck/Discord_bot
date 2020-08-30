const {Client, Collection} = require('discord.js');
const {loadCommands,loadEvents} = require('./util/loader');
const {TOKEN} = require('./config');

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection()) // client.commands = new Collection();
/*
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js')); // garde tout les ficher .js et ignore le reste

for(const file of commandFiles) { // boucle sur tout les ficher .js dans commands et les ajoute dans client.command avec le set
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
    console.log(`Commande chargée: ${command.name}`);
}
*/

loadCommands(client);
loadEvents(client);

client.login(TOKEN);