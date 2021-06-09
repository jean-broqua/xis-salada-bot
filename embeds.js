// Requires
const Discord = require("discord.js");
const config = require('./config.json');

// Definitions
const prefix = config.prefix;

// Embeds
const help = new Discord.MessageEmbed()
    .setTitle("Comandos")
    .setColor("#e8db2c")
    .setDescription(`${prefix}helpx | ${prefix}fome | ${prefix}converter | ${prefix}jingle | ${prefix}status`)


// Export
module.exports = {
    help: help
};