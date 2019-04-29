const Discord = require("discord.js");
const botconfig = require("../Utils/botconfig.json");
const errors = require('../Utils/errors.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
  if (message.member.roles.some(role => [botconfig.staff, botconfig.admin].includes(role.name)) ) {
  var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  var beingremoved1 = message.channel.name;
  var beingremoved = message.guild.channels.find(name => name.name == beingremoved1)
  if (!kUser) return errors.nouser(message)

  beingremoved.overwritePermissions(kUser, { VIEW_CHANNEL: false,
                                           SEND_MESSAGES: false,
                                           ATTACH_FILES: false});
  } else return errors.noperms(message)
}
module.exports.help = {
  name:"remove"
}
