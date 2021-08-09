const Discord = require("discord.js")
const client = new Discord.Client()
const keepAlive = require("./server")
const prefix = ".";



client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}`)
client.user.setActivity('I am lufts dog!!' ,{type: "PLAYING"})
})




client.on("message", message => {
    if(message.content.startsWith(prefix + "ping")){
        message.channel.send('Pong! <:Pingsock:433019097005948938>');

    } else if (message.content.startsWith(prefix + "membercount")) {
      const memberCount = message.guild.memberCount;
      let embed = new Discord.MessageEmbed()
    .setColor("#823b3b")
    .setTitle("Membercount")
    .setDescription(memberCount)
    .setTimestamp()

message.channel.send(embed)
    }
})











keepAlive()
client.login(process.env['TOKEN'])
// if(message === "-membercount"){
 //////   const memberCount = message.guild.memberCount;
 ////   message.channel.send(`Output: ${memberCount}`)
 //   };