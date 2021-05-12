const Discord = require('discord.js');
//run이라는 메소드(function)을 export(수출)

exports.run = (client, msg, args) => {
    console.log("!test123");
    msg.reply(`test!!`);
};
exports.name = {
    name: 'test'
};

