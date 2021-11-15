const discord = require("discord.js");
const DisTube = require("distube");
const bot = new discord.Client;
const mongoclient = require("mongodb").MongoClient



bot.login(process.env.token);


const messaggikiller = [" send an image in general", " subbed to T-Series", " was ejected", " died squished by a cross", " tried to kill Ender Dragon. F soldier.", " ate pizza with pineapple", " failed a parkour and died", " died cos i used ZA WARUDOOO!", " tried to enter the area 51. F.", " died for a memes overdose", " died for a creeper", " suddendly woke up cos heard a noise, went in the kitchen and saw Zio Mainardi eating spaghetti, so he ran upstairs but stumbled and died.", " died", " kissed nyan-cat", " ate to much canned spaghetti", " fought against a kangaroo and died cos kangaroos are too strong, kangaroos will CONQUIRE THE WORL....ZA WARUDOOOOO"];

var embed = new discord.MessageEmbed()
      .setColor("#f2f2f2")
      .setTitle("M4TT30")
      .setURL("https://sites.google.com/view/giochidimatteo/scarica")
      .setDescription("M4TT30 is a fantastic game developer, a memer and a very nice person")
      .setURL("https://oxomatteoxo.itch.io")
      .setThumbnail("https://images-ext-2.discordapp.net/external/H_kDgZ0pZ5KtvxHEkUhTjEfs3lxKnD_zkWTxXVU1nf0/%3Fsize%3D512/https/cdn.discordapp.com/icons/760184013121257512/a899a4245989567ade6b760756748769.png")
      .setFooter("PLS check out the yt channel i run with splash too, it's called Splash Productions");
      
bot.on("message", (message) =>
{

if(message.content == "u!help"){
    var servers = message.member.guild
    var helpembed = new discord.MessageEmbed()
       .setColor('#000000')
       .setTitle("Commands")
       .setDescription("Here all my commands")
       .addField("u!clear 1-100", "Delete 1-100 message (it's a bit bugged)", true)
       .addField("u!M4TT30", "To know more about the developer, M4TT30", true)
       .addField("u!serverinfo","See server information", true)
       .addField("u!userinfo", "See user information", true)
       .addField("u!avatar","See user avatar", true)
       .addField("u!kick e u!ban","Ban and Kick",true)
       .addField("u!join, u!stop, u!bruh, u!sus, u!notsus, u!tiaspecto, u!cow, u!emergencymeeting, u!jojo","Play sounds in voice channel", true)
       .addField("nice, !sus","Sus functions", true)
       .addField("u!8ball","To ask something to the bot", true)
       .addField("u!vote","vote sussy members",true)
       .setThumbnail(servers.iconURL())
       .setFooter("There are secrete ones too");
    message.channel.send(helpembed)
}
if( message.content == "thanks" ){
    message.channel.send("ur welcome!");
}
var user;
var ratedthing;
var randomvo = Math.floor(Math.random() * 100)
var rateembed = new discord.MessageEmbed()
.setColor('#000000')
.setTitle(user)
.setDescription(ratedthing + " is a " + randomvo + "/100" )
.setThumbnail(server.iconURL());
if(message.content.startsWith("u!rank")){
     ratedthing = message.content.slice(7);
    user = message.member.user.username;
    message.channel.send(rateembed)
}
if(message.content == "lol" || message.content == "LOL" || message.content == "lel" || message.content == "lul" ){
    message.channel.send("lmao");
}
 if(message.content == "bruh"){
     message.channel.send("Bruh") 
 }
 if(message.content == "rido" || message.content =="RIDO"){
    message.channel.send("CRINGE");
}
if(message.content.startsWith("u!clear")){
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send("You don't have permission");
        return
    }
   if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
       message.channel.send("You don't have permission");
       return;
   }
   var count = message.content.slice(8);
   count = parseInt(count);

   if(!count || count > 100){
       message.channel.send("Insert a valid number");
       return;
   }


   message.channel.bulkDelete(count, true);
   message.channel.send(count + " deleted messages")
   .then(msg => {
       msg.delete({timeout:2000})
   })
}
if(message.content.includes("weird bot sucks")){
    message.author.send("u suck more");
    message.channel.send("-ban " + message.author.toString());
}
if(message.content == "cringe"){
    message.channel.send("very cringe");
}

if(message.content == "u!M4TT30"){
    message.channel.send(embed);
}
if(message.content == "u!serverinfo"){
  var server = message.member.guild;
  var usernumber = server.memberCount;
  var serverdate = server.createdAt;

  var serverinfoembed = new discord.MessageEmbed()
     .setTitle("Server Info")
     .setThumbnail(server.iconURL())
     .addField("Server name", server.name, true)
     .addField("Server owner", server.owner.user.username, true)
     .addField("Server member", usernumber, true)
     .addField("Server region", server.region, true)
     .addField("Server roles", server.roles.cache.size, true)
     .addField("Server created on", serverdate.toDateString(), true);



     message.channel.send(serverinfoembed);
}
if(message.content.startsWith("u!userinfo")){
    if (message.content == "u!userinfo"){
        var utente = message.member;
    }
    else {
        var utente = message.mentions.members.first();
    }

var userinfoembed = new discord.MessageEmbed()
   .setTitle(utente.user.tag)
   .setThumbnail(utente.user.avatarURL())
   .addField("User ID", utente.user.id, true)
   .addField("Status", utente.user.presence.status, true)
   .addField("Account created on", utente.user.createdAt.toDateString(), true)
   .addField("Joined this server", utente.joinedAt.toDateString(), true);

   message.channel.send(userinfoembed);
  }
if(message.content.startsWith("u!avatar")){
    if (message.content == "u!avatar"){
        var utenteavatar = message.member;
    }
    else {
        var utenteavatar = message.mentions.members.first();
    }
    message.channel.send(utenteavatar.user.avatarURL())
  }
  if(message.content.startsWith("u!kick")){
var utenteKick = message.mentions.members.first();
 if(!message.member.hasPermission("KICK_MEMBERS")){
     message.channel.send("U can't bro");
     return;
 }
 if(!utenteKick.kickable){
     message.channel.send("Bro he is unkickable lol")
     return;
 }

 if(!utenteKick){
     message.channel.send("wut?")
 }
 message.channel.send("<@"+ utenteKick + "> kicked")
  .then(()=> utenteKick.kick())

  }
  if(message.content.startsWith("u!ban")){
      var utenteBan = message.mentions.members.first();
      if(!message.member.hasPermission("BAN_MEMBERS")){
          message.channel.send("u can't bro");
          return;
      }
      if(!utenteBan){
          message.channel.send("sus");
        return;
      }
      if(!utenteBan.bannable){
          message.channel.send("https://tenor.com/view/davie504-slap-slappers-davie-you-tuber-gif-16545714");
          return;
      }
      message.channel.send("<@"+ utenteBan + "> bye bye")
      .then(()=> utenteBan.ban() );
  }
  if(message.content == "!sus"){
      message.channel.send("sus", {files: ["./Image/sus.jpg"]});
  }
  if (message.content == "u!bruh" || message.content == "u!Bruh") {
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("You are not in a voice channel");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/bruh.mp3");
    })
    }
}
if (message.content == "u!join" || message.content == "u!Join") {
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("You are not in a voice channel");
    }
    else{
        canalevocale.join();
    
    }
}
if(message.content == "nice" || message.content == "NICE" || message.content == "Nice"){
    message.channel.send("noice");
    message.channel.send("https://tenor.com/view/noice-nice-click-gif-8843762")
}
if(message.content == "who am i?"){8
    var user = message.member;
    message.channel.send("u r" + user.toString());
}
if(message.content.includes("M4TT30")){
    message.channel.send("<@736906782571495446>");
}

if(message.content.startsWith("u!kill")){
    var utentekillato  = message.mentions.members.first();
    if(!utentekillato){
        message.channel.send("Who wanna kill?")
        return;
    }
    if(utentekillato.id == message.author.id){
        message.channel.send("BRO DON'T KILL YOURSELF!");
        return;
    }
    const randomessage = Math.floor(Math.random() * messaggikiller.length)
    message.channel.send(utentekillato.user.username + messaggikiller[randomessage]);
}
if(message.content == "u!tiaspecto"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/tiaspecto.mp3");
    })
    }

}
if(message.content == "u!sus"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/when_the_impostor_is_sus.mp3");
    })
    }

}
if(message.content == "u!notsus"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/notsus.mp3");
    })
    }

}
if(message.content == "u!giornogiovanna" || message.content == "u!ilventodoro"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/giornogiovanna.mp3");
    })
    }

}
if(message.content == "u!marioeluigi" || message.content == "u!marioandluigi"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/marioeluigi.mp3");
    })
    }

}
if(message.content == "u!emergencymeeting"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/emergencymeeting.mp3");
    })
    }

}
if(message.content == "u!cow"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/mucca.mp3");
    })
    }

}
if(message.content == "u!stop"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("u r not in a vc");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("zitto.mp3");
    })
    }

}
//among us
if(message.content.startsWith("u!vote")){
    var votato = message.mentions.members.first();
    var messaggivotati =[' was an impostor', ' was not an impostor', ' was not the impostor',' was the impostor',' was an imposter', ' was not an imposter', ' was not the imposter',' was the imposter',' was the jester, he won']
    var randomvo = Math.floor(Math.random() * messaggivotati.length)
    if(!votato){
        message.channel.send(message.author.username + messaggivotati[randomvo])
    }
    else{
        message.channel.send(votato.user.username + messaggivotati[randomvo])
    }
}
//8Ball
const EightBall = ["`🎱 Yes`", "`🎱 No`", "`🎱 Maybe`", "`🎱 Probably yes`", "`🎱 Probably no`", "`🎱 idk`", "`🎱 idk, ask to eren bot`", "`🎱 Who knows?`"];
    if(message.content.startsWith("u!8ball")){
        const EightBallAnswer = Math.floor(Math.random() * EightBall.length)
        message.channel.send(EightBall [EightBallAnswer]);
    }
     
    });