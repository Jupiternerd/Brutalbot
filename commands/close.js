const Discord = require("discord.js");
const botconfig = require("../Utils/botconfig.json");
const errors = require('../Utils/errors.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
    const Cembed = new Discord.RichEmbed()
        .setTitle(`🎫 ${message.channel.name}`)
        .addField(`Ticket Closed by ${message.author.tag}.`, `ID: ${message.author.id}`)
        .setColor(botconfig.Tcolor)
        .setTimestamp();
    const filter1 = (response) => {
      return ['-confirm', '-c'].includes(response.content) && response.author.id === message.author.id;
    }

  if (message.member.roles.some(role => [botconfig.staff, botconfig.admin].includes(role.name)) ) {
  var channel1 = message.channel.name;
  var confirmembed = new Discord.RichEmbed()
  .setTitle(`Are you sure you want to delete this channel?`)
  .setColor(botconfig.red)
  .addField(`Why?`, `We noticed the channel doesn\'t start with \"ticket\" so we delayed the deletion.\n\n**Confirm with: -confirm** to close the ticket. This times out in 1 min!`)
  if (!message.channel.name.startsWith(`ticket-`)) {
    message.channel.send(confirmembed)
        .then((m) => {
            message.channel.awaitMessages(filter1, {
                    max: 1,
                    time: 10000
                })
                .then((collected) => {
                    message.channel.delete();
                })
  })
} else {
  message.channel.delete()

}
  let Cc = message.guild.channels.find(name => name.name == `logs`)
Cc.send(Cembed)

} else return errors.noperms(message)}

module.exports.help = {
  name:"close"
}
