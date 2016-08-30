var Discord = require("discord.js");
var mybot = new Discord.Client();
mybot.on("serverNewMember", function (server, user) {
    mybot.addMemberToRole(user, server.roles.get("name", "Peasant"), function (err) { if (err) console.log(err) })
    mybot.sendMessage(server.channels.get("topic", "general"), user.mention() + " welcome to our server!! please take a look at the rules (pinned messages or !rules)")
    
})
mybot.on("message", function (message) {
    if (message.content == "quack quack") {
        message.channel.sendMessage("quak quak");
    }
    if (message.content == "bot test") {
        if (message.author == message.server.owner)
            message.reply("i have answered the summon. how can i be of help?");
        else
            message.reply("only TheFox can summon me! fuck off....");
    }
    if (message.content == "!rules") {
        mybot.getPinnedMessages(message.channel, function (err, messages) {
            if (err) console.log(err)
            message.reply(messages[0])
        })
    }
    
});
mybot.loginWithToken("MjE5ODE1Nzc2ODIxOTY4ODk3.CqXREg.5HetbZrW2gRpDJrsepkY733oKiw");