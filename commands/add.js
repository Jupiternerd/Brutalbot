const Discord = require("discord.js");
const botconfig = require("../Utils/botconfig.json");
const errors = require('../Utils/errors.js')

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (message.member.roles.some(role => [botconfig.staff, botconfig.admin].includes(role.name)) ) {
var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
var beingadded1 = message.channel.name;
var beingadded = message.guild.channels.find(name => name.name == beingadded1)
if (!kUser) return errors.nouser(message)

beingadded.overwritePermissions(kUser, { VIEW_CHANNEL: true,
                                         SEND_MESSAGES: true,
                                         ATTACH_FILES: true});
} else return errors.noperms(message)
}
module.exports.help = {
  name:"add"
}
