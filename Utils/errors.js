const Discord = require('discord.js')
const botconfig = require('./botconfig.json')
module.exports.inuse = async (message) => {
  var error = new Discord.RichEmbed()
  .setAuthor(`ERROR`, message.author.avatarURL)
  .setDescription(`🔻 There is already a ticket open for you!\n${message.author}`)
  .setColor(botconfig.red)
  .setFooter(`[${botconfig.name}], Developed by !A_!Shokk#9941`)
  message.channel.send(error).then((errord) => {errord.delete(8000)
  })

}
module.exports.nouser = async (message) => {
  var error = new Discord.RichEmbed()
  .setAuthor(`ERROR`, message.author.avatarURL)
  .setDescription(`🔻 The user is not found!\n${message.author}`)
  .setColor(botconfig.red)
  .setFooter(`[${botconfig.name}], Developed by !A_!Shokk#9941`)
  message.channel.send(error).then((errord) => {errord.delete(8000)
  })

}

module.exports.noperms = async (message) => {
  var error = new Discord.RichEmbed()
  .setAuthor(`ERROR`, message.author.avatarURL)
  .setDescription(`🔻 You do not have enough permissions!\n${message.author}`)
  .setColor(botconfig.red)
  .setFooter(`[${botconfig.name}], Developed by !A_!Shokk#9941`)
  message.channel.send(error).then((errord) => {errord.delete(8000)
  })

}

module.exports.warning = async (message) => {
  var error = new Discord.RichEmbed()
  .setAuthor(`ERROR`, message.author.avatarURL)
  .setDescription(`🔻 Please do not ping the staff members!\n${message.author}`)
  .setColor(botconfig.red)
  .setFooter(`[${botconfig.name}], Developed by !A_!Shokk#9941`)
  message.channel.send(error).then((errord) => {errord.delete(8000)
  })

}
