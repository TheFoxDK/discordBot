var Discord = require("discord.js");
var mybot = new Discord.Client();

mybot.on('guildMemberAdd', (guild, member) => {
  	member.addRole(guild.roles.find("name","Player"));
  	guild.channels.find("name","general").sendMessage("hi " + member.name + "! Welcome to our server!");
});

mybot.on("message", (message) => {
    if (message.content == "bot test") {
        message.channel.sendMessage(" what up pimps?");
    }
});

mybot.login("MjE5ODE1Nzc2ODIxOTY4ODk3.Crg_hA.Mttp0xfxsKU4lwU0aRsze8moVPE");
console.log("finished");
