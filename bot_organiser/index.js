const {Client, Collection} = require('discord.js');
const {TOKEN,PREFIX} = require('./config');
const {readdirSync} = require("fs");

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

const loadCommands = (dir = "./commands/") => { // aller chercher les ficher .js dans les sous dossier
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

        for(const file of commands){
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name,getFileName);
            console.log(`Commande chargée: ${getFileName.help.name}`);
        };
    });
};

const loadEvents = (dir = "./events/") => { // aller chercher les ficher .js dans les sous dossier
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));
        for(const event of events){
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            client.on(evtName,evt.bind(null,client));
            console.log(`Event chargée: ${evtName}`);
        };
    });
};

loadCommands();
loadEvents();

client.login(TOKEN);