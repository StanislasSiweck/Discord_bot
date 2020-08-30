const {MessageEmbed} = require("discord.js");
const ms = require("ms");
const {CHANNEL} = require('../../config');
const {MESSAGES} = require("../../util/constants");

module.exports.run = async (client,message,args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === "muted");
    let muteTime = (args[1] || '60s');

    if(!muteRole){
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: '#000',
                permissions: [],
            }
        });

        message.guild.channels.cache.forEach(async(channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            });
        });
    }

    await user.roles.add(muteRole.id);
    message.channel.send(`<@${user.id}> est muté pendant ${ms(ms(muteTime))}.`);
    const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.user.id})`)
    .setColor("#287db5")
    .setDescription(`**Action**: Mute\n**Temps**: ${ms(ms(muteTime))}`)
    .setThumbnail(user.user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Par :"+message.author.username, message.author.displayAvatarURL());

    client.channels.cache.get(CHANNEL).send(embed);

    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime))
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;