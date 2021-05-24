const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on("message" , (message) => {
    if (message.content == 'ciao')  {
        var id_canale = bot.channels.cache.get("846307138409857055")
        id_canale.send("Ciao! io sono Dario come ti posso aiutare?");
    };

    if (message.content == 'che ore sono Dario?')  {
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send("ORA ATTUALE :alarm_clock: " + ora + ":" + minuto);
    };
});
