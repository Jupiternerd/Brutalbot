const Discord = require("discord.js");
const botconfig = require("../Utils/botconfig.json");
const errors = require('../Utils/errors.js')

module.exports.run = async (bot, message, args) => {
  message.delete()
  let staff = message.guild.roles.find(everyone => everyone.name == botconfig.staff);
  let admin = message.guild.roles.find(everyone => everyone.name == botconfig.admin);
  let role2 = message.guild.roles.find(name => name.name == "@everyone");
  let inuse = message.guild.channels.find(name => name.name == `ticket-${message.author.discriminator}`)
  let Cc = message.guild.channels.find(name => name.name == `logs`)
  const reason = message.content.split(" ").slice(1).join(" ");

if (!inuse) {


  message.guild.createChannel(`ticket-${message.author.discriminator}`, "text").then(c => {

  c.setParent(`${botconfig.catergoryid}`)
      c.overwritePermissions(staff, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      let ticketopenedEmbed = new Discord.RichEmbed()
      .setTitle("A ticket has been opened")
      message.channel.send(ticketopenedEmbed)
      const embed = new Discord.RichEmbed()
          .setTitle("🎫 Support Ticket" + ` ${message.author.tag}`)
          .addField(`Hello ${message.author.username}!`, `Welcome to your support ticket. A Support Member will be with you shortly!`)
          .addField(`Can you tell us a bit more?`, "Describe the issue in further detail if you could.")
          .setColor(botconfig.Tcolor)
          .setTimestamp();
          const Cembed = new Discord.RichEmbed()
              .setTitle("🎫 Support Ticket" + ` ${message.author.tag}`)
              .addField(`Ticket Opened by ${message.author.tag}.`, `ID: ${message.author.id}`)
              .setColor(botconfig.Tcolor)
              .setTimestamp();


if (reason) {
    embed.addField(`Reason:`, reason)
}


Cc.send(Cembed)
c.send(embed)

})
} else {
  errors.inuse(message)
}
}
  module.exports.help = {
    name:"new"
  }
