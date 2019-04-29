const Discord = require('discord.js')
const botconfig = require('../Utils/botconfig.json')
const errors = require('../Utils/errors.js')
const tfile = require('./help.js')
module.exports.run = async (bot,message,args) => {
  message.delete()

  var Color = botconfig.gold;
    this.start1(message, Color)

}

module.exports.start1 = async (message, Color, ehelp1R, ehelpR) => {
      const filter = (reaction, user) => {
          return ['📝', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
  if(message.member.roles.some(r=>[botconfig.staff].includes(r.name))) {
    var ehelp1 = new Discord.RichEmbed()
    .setAuthor("📚 Staff Help Menu", message.author.avatarURL)
    .setColor(Color)
    .addField(`Welcome to the Help Menu!`, `Displaying **Player** & **Staff** help.\nStaff commands are listed in the bottom.\nUse the buttons below to navigate!`)
    .setFooter(`>📚 Staff Help Menu< | 📝 Ticket Commands`)

  } else {
    var ehelp1 = new Discord.RichEmbed()
    .setAuthor("📚 Help Menu", message.author.avatarURL)
    .setColor(Color)
    .addField(`Welcome to the Help Menu!`, `Displaying **Player** help.\nUse the buttons below to navigate!`)
    .setFooter(`>📚 Help Menu< | 📝 Ticket Commands`)

  }
  async function Send2() {
  ehelp1R.edit(ehelp1).then(async (ehelp1R) => {


    async function React(ehelp1R) {
      await ehelp1R.react('📚').then(() => ehelp1R.react('📝')).then(() => ehelp1R.react('❎'))

      }

      React(ehelp1R)


    ehelp1R.awaitReactions(filter, {
                max: 1,
            }).then((collected) => {
              const reaction = collected.first()




  if (reaction.emoji.name === '📝') {
  tfile.start2(message, ehelp1R, Color)
    reaction.remove(message.author)

  }



  if (reaction.emoji.name === '❎') {
    ehelp1R.delete()

  }
  })


  })

}
async function Send1() {
message.channel.send(ehelp1).then(async (ehelp1R) => {


  async function React(ehelp1R) {
    await ehelp1R.react('📚').then(() => ehelp1R.react('📝')).then(() => ehelp1R.react('❎'))

    }

    React(ehelp1R)


  ehelp1R.awaitReactions(filter, {
              max: 1,
          }).then((collected) => {
            const reaction = collected.first()

if (reaction.emoji.name === '📝') {
 tfile.start2(message, ehelp1R, Color)
  reaction.remove(message.author)

}
if (reaction.emoji.name === '❎') {
  ehelp1R.delete().catch(O_o=>{});

}

})
  setTimeout(function (){ ehelp1R.delete().catch(O_o=>{}) } ,60000)
clearTimeout()

})



}
  if (!ehelp1R) { Send1()
  } else { Send2() }


}
module.exports.start2 = async (message, ehelp1R, Color) => {


  if(message.member.roles.some(r=>[botconfig.staff].includes(r.name))) {
    var ehelp2 = new Discord.RichEmbed()
    .setAuthor("📝 Staff Ticket Commands", message.author.avatarURL)
    .addField('**Commands**', '**-new** *Creates a new ticket!\n')
    .addField('**Staff Commands**', '**-close** *Closes the ticket.*\n**-add** [@Tag] *Adds the person to the channel.*\n**-remove** [@Tag] *Removes the person from the channel.*\n**-rename** [Name] *Renames the channel.*')
    .setColor(Color)
    .setFooter(`📚 Staff Help Menu | >📝 Staff Ticket Commands<`)

  } else {
var ehelp2 = new Discord.RichEmbed()
.setAuthor("📝 Ticket Commands", message.author.avatarURL)
.setColor(Color)
.addField('**Commands**', '**-new** *Creates a new ticket!\n', true)
.setFooter(`📚 Help Menu | >📝 Ticket Commands<`)

}
const filter = (reaction, user) => {
    return ['📚', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
ehelp1R.edit(ehelp2).then(async (ehelp2R) => {

    //React(ehelp2R)

  ehelp2R.awaitReactions(filter, {
              max: 1,
          }).then((collected) => {
            const reaction = collected.first();
var ehelp1R = ehelp2R;
if (reaction.emoji.name === '📚') {

  tfile.start1(message, Color, ehelp1R).catch(O_o=>{});
  reaction.remove(message.author).catch(O_o=>{});

}


if (reaction.emoji.name === '❎') {
  ehelp2R.delete().catch(O_o=>{});

}
})
})
}
module.exports.help = {
    name:"help"

}
