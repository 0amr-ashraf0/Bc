const Discord = require("discord.js");
const RichEmbed = require("discord.js");
var prefix = "#";
client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};    
});



client.login("NTI5MDEzMDYwNzU3NzQ5NzY0.Dwqpgw.JBH6_HhW8rDQfvDAwyVwjE24d4s")
