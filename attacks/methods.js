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
	.setTitle('** # Available attack Methods **')
	.setDescription("``` join                  \n botjoiner                  \n mc-bot                  \n botnet -beta                  \n extremejoin                  \n gayspam                  \n memory                  \n ram                  \n serverfuck                  \n invalidnames                  \n legacyping                  \n localhost                  \n legitnamejoin        \n legitjoin                  \n longnames                  \n multikiller                  \n nullping                  \n playpacket                  \n randombytes                  \n spamjoin                  \n spoof                  \n tcpbypass                  \n tcphit                  \n ultimatesmasher                  \n bigpacket                  \n chatbot                  ```\n **for stop all attack** $stop \n # New Methods chatbot !  \n **Developer : kh33 team**")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['methods'],
  permLevel: 0
}

exports.help = {
  name: 'methods',
  description: 'Tank',
  usage: 'methods'
}
