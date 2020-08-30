const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

const xisCotation = config.cotation;
const prefix = config.prefix;

client.once('ready', () => {
    console.log('Xis Salada in online');
});

client.on('message', message => {

    // Commands with no prefix.
    if (message.content.search('xis') != -1) {
        message.reply('oi xuxu');
    }

    // Commands with prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Converte um valor em reais para xis.
    if(command === 'converter') {
        const amount= parseFloat(args[0]) / xisCotation;

        if (!isNaN(amount)) {
            message.channel.send('R$ ' + args[0] + ' = ' + 'X$' + amount.toFixed(2));
        }
    } else if(command == 'fome') {

        message.channel.send({ files: ["https://i.imgur.com/CJj9pHh.jpg"] });
    }
});

client.login(process.env.TOKEN);