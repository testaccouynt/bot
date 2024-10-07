const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
const roleName = message.member.roles.cache.find(r => r.name === "[ᴀᴛᴛᴀᴄᴋ-ʙᴀsɪᴄ]")

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('** # help menu | ⚡ **')
	.setDescription("** Commands ** \n protocols $ver Show all available versions \n $stop To stop the attack! \n $methods Show available method \n Dev - kh33 team | ⚡")
	message.channel.send(embed1);
        message.react('❓');
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'Tank',
  usage: 'help'
}
