const discord = require("discord.js");
const DisTube = require("distube");
const bot = new discord.Client;

bot.login(process.env.token);
bot.DisTube = new DisTube( bot, { searchSongs: false, emitNewSongOnly: true});
const messaggikiller = [" ha visto un video dei Me Contro Te", " si è iscritto a T-Series", " è stato ucciso perché aveva la fotocamera disattivata", " non può morire, è immortale", " è morto tentando di sconfiggere l'Endere Dragon. F soldato.", " ha assaggiato la pizza con l'ananas", " ha failato un parkour ed è morto per i danni da caduta", " ha atteso per tutta la vita i voti di scienze", " voleva vedere cosa c'era nell'area 51. F."];
var embed = new discord.MessageEmbed()
      .setColor("#f2f2f2")
      .setTitle("Clicca qui per scaricare i giochi migliori al mondo")
      .setURL("https://sites.google.com/view/giochidimatteo/scarica")
      .setDescription("Solo per PC")
      .addField("Gioco v1.1", "Gioca al famoso gioco arcade Breakout, ma molto più difficile", false)
      .addField("DEMO", "Evita le dinamiti e ottieni il puntegio più alto (o più basso) di tutti", false)
      .setThumbnail("https://images-ext-2.discordapp.net/external/H_kDgZ0pZ5KtvxHEkUhTjEfs3lxKnD_zkWTxXVU1nf0/%3Fsize%3D512/https/cdn.discordapp.com/icons/760184013121257512/a899a4245989567ade6b760756748769.png")
      .setFooter("Scarica oppure ti banno")
      .setTimestamp();
      
bot.on("message", (message) =>
{
if(message.content == "bot che ore sono?"|| message.content == "bot che ora è?"|| message.content == "bot che ora è" || message.content == "bot che ore sono" ) {
    var data= new Date();
    var ora = data.getHours();
    var minuti = data.getMinutes();
    message.channel.send("sono le "+ ora +":"+minuti);
}
if(message.content == "grazie" ){
    message.channel.send("prego!");
}
if( message.content == "thanks" ){
    message.channel.send("ur welcome!");
}
if(message.content == "lol" || message.content == "LOL" || message.content == "lel" || message.content == "lul" ){
    message.channel.send("lmao");
}
if( message.content == "bot aiutami") {
   message.reply("dimmi");
}
if( message.content == "bravo bot") {
    message.reply("Grazie:blush:");
 }
 if(message.content == "bruh"){
     message.channel.send("Bruh") 
 }
 if(message.content == "rido" || message.content =="RIDO"){
    message.channel.send("CRINGE");
}
if(message.content.startsWith("bot pulisci la chat")){
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send("non hai il permesso!");
        return
    }
   if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
       message.channel.send("non ho il permesso");
       return;
   }
   var count = message.content.slice(19);
   count = parseInt(count);

   if(!count || count > 100){
       message.channel.send("Inserisci un numero valido");
       return;
   }


   message.channel.bulkDelete(count, true);
   message.channel.send(count + " messaggi eliminati")
   .then(msg => {
       msg.delete({timeout:2000})
   })
}
if(message.content == "bot strano fa schifo"){
    message.author.send("cosa hai detto scusa?");
    message.channel.send("p!ban " + message.author.toString());
}
if(message.content == "cringe"){
    message.channel.send("super cringe");
}

if(message.content == "bot ho voglia di giocare" || message.content == "bot giochi"|| message.content == "bot voglio i giochi"){
    message.channel.send(embed);
}
if(message.content == "bot serverinfo"){
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
if(message.content.startsWith("bot userinfo")){
    if (message.content == "bot userinfo"){
        var utente = message.member;
    }
    else {
        var utente = message.mentions.members.first();
    }

if(!utente){
    message.channel.send("User not found");
    return;
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
  if(message.content.startsWith("kick")){
var utenteKick = message.mentions.members.first();
 if(!message.member.hasPermission("KICK_MEMBERS")){
     message.channel.send("No");
     return;
 }
 if(!utenteKick.kickable){
     message.channel.send("Nope")
     return;
 }

 if(!utenteKick){
     message.channel.send("wut?")
 }
  utenteKick.kick()
  .then(()=> message.channel.send("<@"+ utenteKick + "> kickato"))
  }
  if(message.content.startsWith("ban")){
      var utenteBan = message.mentions.members.first();
      if(!message.member.hasPermission("BAN_MEMBERS")){
          message.channel.send("no");
          return;
      }
      if(!utenteBan){
          message.channel.send("caspita");
        return;
      }
      if(!utenteBan.bannable){
          message.channel.send("https://tenor.com/view/davie504-slap-slappers-davie-you-tuber-gif-16545714");
          return;
      }
      utenteBan.ban()
      .then(()=> message.channel.send("<@"+ utenteBan + "> bye bye"));
  }
  if(message.content == "!sus"){
      message.channel.send("sus", {files: ["sus.jpg"]});
  }
  if (message.content == "u!bruhsound" || message.content == "u!Bruhsound") {
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("bruh.mp3");
    })
    }
}
if (message.content == "u!join" || message.content == "u!Join") {
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join();
    
    }
}
  if(message.content == "Salva"){
    message.channel.send("Salvataggio in corso...")
    .then(msg => {setTimeout(() => {
        message.channel.send("Salvataggio completato!")
    }, timeout=2000)});
}
if(message.content == "Carica"){
message.channel.send("Caricamento in corso...")
.then(msg => {setTimeout(() => {
    message.channel.send("Caricamento completato!")
}, timeout=2000)});
}
if(message.content == "nice" || message.content == "NICE" || message.content == "Nice"){
    message.channel.send("noice");
    message.channel.send("https://tenor.com/view/noice-nice-click-gif-8843762")
}
if(message.content == "chi sono io?"){
    var user = message.member;
    message.channel.send("Tu sei" + user.toString());
}
if(message.content.includes("teo")||message.content.includes("Teo")||message.content.includes("TEO")){
    message.channel.send("<@736906782571495446>");
}
if(message.content.includes("bot strano") || message.content.includes("Bot strano")|| message.content.includes == ("BOT STRANO")){
      message.channel.send("cosa?");
}
if(message.content == "!conversazione" && message.member.hasPermission("MANAGE_MESSAGES")){
  message.channel.send("Hey Splash Bot, come va?")
}

if(message.content.startsWith("bot killa")){
    var utentekillato  = message.mentions.members.first();
    if(utentekillato == message.member.user){
        message.channel.send("Ma no non ucciderti che sad");
        return;
    }
    if(!utentekillato){
        message.channel.send("E chi?")
        return;
    }
    const randomessage = Math.floor(Math.random() * messaggikiller.length)
    message.channel.send(utentekillato.toString() + messaggikiller[randomessage]);
}
if(message.content.length == "12"){
    message.channel.send("LMAO")
}
if(message.content == "u!tiaspecto"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("tiaspecto.mp3");
    })
    }

}
if(message.content == "u!sus"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("when_the_impostor_is_sus.mp3");
    })
    }

}
if(message.content == "u!giornogiovanna" || message.content == "u!ilventodoro"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("giornogiovanna.mp3");
    })
    }

}
if(message.content == "u!stop"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("zitto.mp3");
    })
    }

}
});