const {MessageEmbed,MessageAttachment} = require("discord.js");
const diceImg =  new MessageAttachment('./assets/img/dice.png')
const randomDice = () => Math.floor(Math.random()*6)+1; // 1d6

module.exports = {
    name : 'dice',
    description : 'Renvoie la valeur de plusieurs dès!',
    execute(client,message,args){
        const embed = new MessageEmbed()
        .setColor("#d54e12")
        .setTitle("Dés aléatoire")
        .setURL("https://google.com")
        .attachFiles(diceImg)
        .setThumbnail('attachment://dice.png')
        .addFields(
            {name : 'Dés #1', value: randomDice(), inline:true},
            {name : 'Dés #2', value: randomDice(), inline:true},
            {name : 'Dés #3', value: randomDice(), inline:true}
        )
        .addFields(
            {name : 'Dés #4', value: randomDice(), inline:true},
            {name : 'Dés #5', value: randomDice(), inline:true},
            {name : 'Dés #6', value: randomDice(), inline:true}
        );

        message.channel.send(embed);
    }
}