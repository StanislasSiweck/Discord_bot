const MESSAGES = {
    COMMANDS: {
        MISC: {
            SAY:{
                name : 'say',
                aliases: ["rep","dis"],
                category: 'misc',
                description : "Répéte le message d'un user",
                usage: "Vous devez mettre un message",
                cooldown: 10,
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            PING:{
                name : 'ping',
                aliases:["p"],
                category: 'misc',
                description : 'pong',
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false,
            },

            HELP:{
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
        },

        MODERATION: {
            BAN:{
                name : 'ban',
                aliases:["ban"],
                category: 'moderation',
                description : 'Permet de ban une peronne',
                cooldown: 0,
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },

            KICK:{
                name : 'kick',
                aliases:["kick"],
                category: 'moderation',
                description : 'Permet de kick une peronne',
                cooldown: 0,
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },

            MUTE:{
                name : 'mute',
                aliases:["mute","m"],
                category: 'moderation',
                description : 'Permet de mute une peronne',
                cooldown: 0,
                usage: '<@user> <time>',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },

            PRUNE:{
                name : 'prune',
                aliases:["prune"],
                category: 'moderation',
                description : "Permet de prune les message d'un user",
                cooldown: 0,
                usage: '<nbr_message>',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },

            PURGE:{
                name : 'purge',
                aliases:["purge"],
                category: 'moderation',
                description : 'Permet de purger un nombre de message',
                cooldown: 0,
                usage: '<nbr_message>',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },

            UNBAN:{
                name : 'unban',
                aliases:["unban","ub"],
                category: 'moderation',
                description : 'Permet de unmban une peronne',
                cooldown: 0,
                usage: '<user_id>',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },

            UNMUTE:{
                name : 'unmute',
                aliases:["unmute","um"],
                category: 'moderation',
                description : 'Permet de unmute une peronne',
                cooldown: 0,
                usage: '<@user>',
                isUserAdmin: true,
                permissions: true,
                args: true,
            }
        }
    }
}

exports.MESSAGES = MESSAGES;