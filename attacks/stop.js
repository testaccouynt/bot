const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
if (message.channel.id != room) {
	return;
  }
var exec = require('child_process').exec
exec(`pkill 'java'`, (error, stdout, stderr) => {
});
console.log('Dừng lại tất cả cuộc tấn công:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **kh33 team V1.0** 🔥')
	.setTimestamp()
	.setDescription("**► ALL ATTACKS STOPED! 💥**")
	.setFooter('© Dev kh33 team.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 message.react('✅');
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stop'],
  permLevel: 0
}

exports.help = {
  name: 'stop',
  description: 'Özel',
  usage: 'stop'
}