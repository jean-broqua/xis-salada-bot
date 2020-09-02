const Discord = require('discord.js');
const config = require('./config.json');
const sodium = require('libsodium-wrappers');
const opus = require('opusscript');

const client = new Discord.Client();

const xisCotation = config.cotation;
const prefix = config.prefix;

var startTime;

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

    } else if(command == 'jingle') {

        // Check if the timeout is comleted
        if(isJinglePlayable) {
            if(message.member.voice.channel) {
                var voiceChannel = message.member.voice.channel;
                startTime = new Date;

                // Send logo image in the chat
                message.channel.send({ files: ["./images/logo.png"] });
                
                // Play the audio on the voice channel
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play('jingle.mp3');

                    // Exite voice channel of the song is played
                    setTimeout(() => {
                        voiceChannel.leave();
                    }, 30000);

                }).catch(err => console.log(err));
            }
        } else {
            channel.message.reply("Pessoas andam me sabotando (Guilherme). Por isso to com um delay para tocar o maravilhoso jingle.")
        }

    }
});

function isJinglePlayable() {
    let endTime = new Date;
    if (endtime - startTime > config.jigleTimeout) {
        return true;
    } else {
        return false;
    }
}

client.login(process.env.TOKEN);