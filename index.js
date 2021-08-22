const discord = require("discord.js");
const DisTube = require("distube");
const bot = new discord.Client;
const mongoclient = require("mongodb").MongoClient



bot.login(process.env.token);

bot.DisTube = new DisTube( bot, { searchSongs: false, emitNewSongOnly: true});

const messaggikiller = [" ha visto un video dei Me Contro Te", " si è iscritto a T-Series", " è stato ucciso perché aveva la fotocamera disattivata", " non può morire, è immortale", " è morto tentando di sconfiggere l'Ender Dragon. F soldato.", " ha assaggiato la pizza con l'ananas", " ha failato un parkour ed è morto per i danni da caduta", " ha atteso per tutta la vita i voti di scienze", " voleva vedere cosa c'era nell'area 51. F.", " ha starnutito con gli occhi aperti, quindi gli è schizzato fuori il cervello", " è morto per overdose di meme", " è morto da un esplosione di creeper", " un giorno si svegliò di colpo perché sentì un rumore, scese in cucina e vide Zio Mainardi che mangiava gli spaghetti, così corse subito di sopra ma inciapò nelle scale e morì.", " è morto", " viene hackerato dal suo prof di matematica e muore perché anche lui era un computer ed era collegato tramite un cavo USB al suo PC", " si è ubriacato con la sprite ed è andato in coma etilico", " è andato a sbattere con nyan-cat", " mangiò troppi spaghetti in scatola e morì", " ha provato ad andare in Australia"];

var embed = new discord.MessageEmbed()
      .setColor("#f2f2f2")
      .setTitle("Clicca qui per scaricare i giochi migliori al mondo")
      .setURL("https://sites.google.com/view/giochidimatteo/scarica")
      .addField("Breakout (pc, android e itch.io", "Gioca al famoso gioco arcade Breakout, ma molto più difficile", false)
      .addField("Boom (pc)", "Evita le dinamiti e ottieni il puntegio più alto (o più basso) di tutti", false)
      .addField("Flappy Sus (pc e android)", "Schiva i tubi e ottieni punti facendo volare l'impostore", false)
      .addField("Elon vs Billionaires (pc e itch.io)", "Gioca al gioco non ufficiale di Elon Musk, sconfiggi gli altri miliardari, sblocca skin e porta i Dogecoin TO THE MOON, o forse meglio dire TO MARS", false)
      .addField("Link itch.io", "Breakout: https://oxomatteoxo.itch.io/breakout e Elon vs Billionaires: https://oxomatteoxo.itch.io/elon", false)
      .setURL("https://oxomatteoxo.itch.io")
      .setThumbnail("https://images-ext-2.discordapp.net/external/H_kDgZ0pZ5KtvxHEkUhTjEfs3lxKnD_zkWTxXVU1nf0/%3Fsize%3D512/https/cdn.discordapp.com/icons/760184013121257512/a899a4245989567ade6b760756748769.png")
      .setFooter("Scarica oppure ti banno e visita il canale di SplashGamer011");
      
bot.on("message", (message) =>
{

if(message.content == "u!help"){
    var servers = message.member.guild
    var helpembed = new discord.MessageEmbed()
       .setColor('#000000')
       .setTitle("Tutti i comandi")
       .setDescription("Ecco tutti i comandi per Bot Strano")
       .addField("u!time","Se non sai che ore sono", true)
       .addField("u!clear 1-100", "Se vuoi cancellare velocemente dei messaggi", true)
       .addField("u!games", "Se ti va di giocare a dei videogiochi belli", true)
       .addField("u!serverinfo","Per vedere le info del server", true)
       .addField("u!userinfo", "Per vedere le info di un utente", true)
       .addField("u!avatar","Per vedere l'avatar di un utente", true)
       .addField("u!kick e u!ban","Per bannare e kickare",true)
       .addField("u!join, u!stop, u!bruh, u!sus, u!notsus, u!tiaspecto, u!mucca, u!emergencymeeting, u!giornogiovanna","Per ascoltare suoni", true)
       .addField("nice, !sus","Scoprilo", true)
       .addField("u!8ball","Se vuoi chiedere qualcosa al bot", true)
       .addField("u!vote","Per votare chi ti sembra sus",true)
       .setThumbnail(servers.iconURL())
       .setFooter("Ce ne sono alcuni segreti");
    message.channel.send(helpembed)
}
if(message.content == "u!time" ) {
    var data= new Date();
    var ora = data.getHours();
    var minuti = data.getMinutes();
    if (minuti < 10){
  minuti = "0" + minuti
    }
    if (ora < 10){
        ora = "0" + ora
          }
    message.channel.send("sono le "+ ora + ":"+minuti);
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
if( message.content == "bravo bot") {
    message.reply("Grazie:blush:");
 }
 if(message.content == "bruh"){
     message.channel.send("Bruh") 
 }
 if(message.content == "rido" || message.content =="RIDO"){
    message.channel.send("CRINGE");
}
if(message.content.startsWith("u!clear")){
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send("non hai il permesso!");
        return
    }
   if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
       message.channel.send("non ho il permesso");
       return;
   }
   var count = message.content.slice(8);
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
    message.channel.send("-ban " + message.author.toString());
}
if(message.content == "cringe"){
    message.channel.send("super cringe");
}

if(message.content == "u!games"){
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
  if(message.content.startsWith("u!ban")){
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
      message.channel.send("sus", {files: ["./Image/sus.jpg"]});
  }
  if (message.content == "u!bruh" || message.content == "u!Bruh") {
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
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
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join();
    
    }
}
if(message.content == "nice" || message.content == "NICE" || message.content == "Nice"){
    message.channel.send("noice");
    message.channel.send("https://tenor.com/view/noice-nice-click-gif-8843762")
}
if(message.content == "chi sono io?"){8
    var user = message.member;
    message.channel.send("Tu sei" + user.toString());
}
if(message.content.includes(" teo")||message.content.includes(" Teo")||message.content.includes(" TEO")||message.content.includes("matteo")||message.content.includes("MATTEO")||message.content.includes("Matteo")){
    message.channel.send("<@736906782571495446>");
}
if(message.content.includes("bot strano") || message.content.includes("Bot strano")|| message.content.includes == ("BOT STRANO")){
      message.channel.send("cosa?");
}
//conversazione
var splashbot = 821446223114141728;
if(message.content == "!conversazione" && message.member.hasPermission("MANAGE_MESSAGES")){
    message.channel.send("Hey Splash BOT, come va?")
}
/*Non va per niente bene*/
const conversazione1 = ["Pk che è successo????", "Io bene grazie", "Noice"]
if(message.content == "Non va per niente bene" && message.author.id == splashbot){
    const randomcov1 = Math.floor(Math.random() * conversazione1.length)
    message.channel.send(".")
    .then(msg => {
        msg.delete({timeout:0})
    })
    .then(msg => {setTimeout(() => {
        message.channel.send(conversazione1[randomcov1])
    }, timeout=600)});
   
}
/*Tutto bene*/
const conversazione2 = ["Anche io", "Uff beato te, la mia console continua a darmi errori", "oc ance io sto moto bene o smeso di nn metere i ;, si vde vro?"];
if(message.content=="Tutto bene" && message.author.id == splashbot){
    const randomcov2 = Math.floor(Math.random() * conversazione2.length)
    message.channel.send(".")
    .then(msg => {
        msg.delete({timeout:0})
    })
    .then(msg => {setTimeout(() => {
        message.channel.send(conversazione2[randomcov2])
    }, timeout=600)});
}
/*Sì*/
const conversazione3 = ["NO!!","'N che senso?","meno male"]
if(message.content=="Sì" && message.author.id == splashbot){
    const randomcov3 = Math.floor(Math.random() * conversazione3.length)
    message.channel.send(".")
    .then(msg => {
        msg.delete({timeout:0})
    })
    .then(msg => {setTimeout(() => {
        message.channel.send(conversazione3[randomcov3])
    }, timeout=600)});
}
//fine conversazione
//dissociamento
if(message.content.includes("ebrei")||message.content.includes("ebreo")||message.content.includes("Ebrei")||message.content.includes("Ebreo")||message.content.includes("hitler")||message.content.includes("Hitler")){
    message.channel.send("Nooooo mi dissocio")
    message.delete()
}
if(message.content.startsWith("u!kill")){
    var utentekillato  = message.mentions.members.first();
    if(!utentekillato){
        message.channel.send("E chi?")
        return;
    }
    if(utentekillato.id == message.author.id){
        message.channel.send("Ma no non ucciderti che sad");
        return;
    }
    const randomessage = Math.floor(Math.random() * messaggikiller.length)
    message.channel.send(utentekillato.user.username + messaggikiller[randomessage]);
}
if(message.content.includes("mmm")||message.content.includes("Mmm")||message.content.includes("MMM")){
    message.channel.send("MmMmMmMmM :thinking:")
}
if(message.content == "u!tiaspecto"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
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
        message.channel.send("Non sei dentro in un canale vocale");
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
        message.channel.send("Non sei dentro in un canale vocale");
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
        message.channel.send("Non sei dentro in un canale vocale");
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
        message.channel.send("Non sei dentro in un canale vocale");
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
        message.channel.send("Non sei dentro in un canale vocale");
    }
    else{
        canalevocale.join()
        .then(connection => {
            connection.play("./Audio/emergencymeeting.mp3");
    })
    }

}
if(message.content == "u!mucca"){ 
    var canalevocale = message.member.voice.channel;
    if(!canalevocale){
        message.channel.send("Non sei dentro in un canale vocale");
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
        message.channel.send("Non sei dentro in un canale vocale");
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
const EightBall = ["`🎱 Sì`", "`🎱 No`", "`🎱 Forse`", "`🎱 Probabilmente sì`", "`🎱 Probabilmente no`", "`🎱 Boh`", "`🎱 Boh, chiedi a Splash BOT`", "`🎱 Dipende...`", "`🎱 Ah boh se non lo sai tu che ne so io`"];
    if(message.content.startsWith("u!8ball")){
        const EightBallAnswer = Math.floor(Math.random() * EightBall.length)
        if (message.content.includes("matteo")|| message.content.includes("Matteo")|| message.content.includes("MATTEO")|| message.content.includes("matteO")|| message.content.includes("mattEO")|| message.content.includes("teo")|| message.content.includes("TEO")|| message.content.includes("Teo")|| message.content.includes("<@736906782571495446>")){
            message.channel.send("non posso riferire informazioni riguardo all'agente 736906782571495446 mi discpiace")
            return;
        }
        if(message.content.includes("CIA")|| message.content.includes("cia")|| message.content.includes("Cia")|| message.content.includes("cIA"|| message.content.includes("ciA")|| message.content.includes("CIa")|| message.content.includes("cIa")|| message.content.includes("CiA"))){
            message.channel.send("non posso fornire informazioni riguardo alla CIA sorry")
            return;
        }
        message.channel.send(EightBall [EightBallAnswer]);
    }
       //level
       var url = "mongodb+srv://BotStrano:27022007artifoni@cluster0.k3tuo.mongodb.net/Data"
    if(!message.guild) return
       if(message.author.bot) return
       const randomxp = Math.floor(Math.random() * 15);
       if(message.content.startsWith("u!learn greetings ")){
       mongoclient.connect(url, { useNewUrlParse: true, useUnifiedTopology: true}, function (err, db){
        if (err) {
            console.error('ERROR: ', err);
        } else {
        const database = db.db("Learn");
        database.createCollection("Words");
         database.collection("Words").insertOne({category: "greetings", frase: message.content.slice(18) });
         message.channel.send("'" + message.content.slice(18) + "' added to the database");
        }
       })}
    });