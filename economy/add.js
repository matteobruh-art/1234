const { Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'add',
    /** 
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
   */
    run: async(client,message,args) => {
        const member = message.mentions.members.first() || message.member;
        client.add(member.id, parseInt(args[0]));

        message.channel.send('Added balance')
    }
}