var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("📚 - Help panel")
    
     .setThumbnail(bot.user.displayAvatarURL())   
      

    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)
    


    .addField(`ㅤ`, "<a:moderation:866364053312110602> `|` moderation")

    .addField(`ㅤ`, "<a:manage:866364115424903189> `|` manage")

    .addField(`ㅤ`, "<a:Fun:866363351851860029> `|` fun")
  
    .addField(`ㅤ`, "<a:Games:866363992963153970> `|` games")

    .addField(`ㅤ`, "<a:economy:866363918356447243> `|` economy")
    
    .addField(`ㅤ`, "<a:hot:866364303081865217> `|` nsfw")

    .addField(`ㅤ`, "<a:utility:866364421382209546> `|` utility")

    .addField(`ㅤ`, "<a:image:866373292537151498> `|` image")

    .addField(`ㅤ`, "<a:text:866364286393647114> `|` textsystem") 

    .addField(`ㅤ`, "<a:misc:866364019702628402> `|` misc")

    .addField(`ㅤ`, "<a:info:866364330453762068> `|`  info")
   
    .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")

    
    

message.channel.send(log);
}
}
  }

 
