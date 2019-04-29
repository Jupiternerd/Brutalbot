/*@Author: A_Shokk
 *@Lang : Js
*/

const Discord = require('discord.js'); //* I M P O R T A N T *
const botconfig = require('./Utils/botconfig.json'); //* I M P O R T A N T *
const bot = new Discord.Client({disableEveryone: true}); //* I M P O R T A N T *
const fs = require('fs');
const errors = require('./Utils/errors.js');
bot.commands = new Discord.Collection();

  bot.on("ready", async () => {
  console.log(`[Bot On..]\n[CLIENT bot online on ${bot.guilds.size} Discord servers]`)
  bot.user.setActivity("play.brutal.com", {type: "PLAYING"});
  bot.user.setStatus("Idle");
 });

bot.on('error', console.error);
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("[Err] Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
      console.log(`[C] [${f} loaded]`);
    bot.commands.set(props.help.name, props);

  });
});

bot.on("message", async message => {
  if (message.author.bot) return;



  var tagged = message.guild.member(message.mentions.users.first())
  if (tagged) {
  if (tagged.roles.some(role => [botconfig.staff, botconfig.admin].includes(role.name))) {
    if (message.member.roles.some(role => [botconfig.staff, botconfig.admin].includes(role.name)) ) {
      return;
    } else {
      message.delete()
      errors.warning(message)

    }
  }
}

  if (message.content.indexOf(botconfig.prefix) !== 0) return;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.toLowerCase().slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


})
bot.on("guildMemberAdd", member => {
  var Nrole = member.guild.roles.find(role => role.name === botconfig.Nrole);
member.addRole(Nrole)

 });



/*bot.on('raw', packet => {
    // We don't want this to run on unrelated packets
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    // Grab the channel to check the message from
    const channel = bot.channels.get(packet.d.channel_id);
    // There's no need to emit if the message is cached, because the event will fire anyway for that
    if (channel.messages.has(packet.d.message_id)) return;
    // Since we have confirmed the message is not cached, let's fetch it
    channel.fetchMessage(packet.d.message_id).then(message => {
        // Emojis can have identifiers of name:id format, so we have to account for that case as well
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        // This gives us the reaction we need to emit the event properly, in top of the message object
        const reaction = message.reactions.get(emoji);
        // Adds the currently reacting user to the reaction's users collection.
        if (reaction) reaction.users.set(packet.d.user_id, bot.users.get(packet.d.user_id));
        // Check which type of event it is before emitting
        if (packet.t === 'MESSAGE_REACTION_ADD') {
            bot.emit('messageReactionAdd', reaction, bot.users.get(packet.d.user_id));
        }
        if (packet.t === 'MESSAGE_REACTION_REMOVE') {
            bot.emit('messageReactionRemove', reaction, bot.users.get(packet.d.user_id));
        }
    });
});*/
bot.login(botconfig.token)
