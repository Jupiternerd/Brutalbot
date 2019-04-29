const Discord = require("discord.js");
const botconfig = require("../Utils/botconfig.json");
const errors = require('../Utils/errors.js')

module.exports.run = async (bot, message, args) => {
message.delete()
  if (message.member.roles.some(role => [botconfig.staff, botconfig.admin].includes(role.name)) ) {
var beingrenamed1 = message.channel.name;
var beingrenamed = message.guild.channels.find(name => name.name == beingrenamed1)
var newname = args[0];

console.log(newname)
beingrenamed.setName(newname)
} else return errors.noperms(message)
}
module.exports.help = {
  name:"rename"
}
