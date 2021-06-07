const Discord = require('discord.js');
const config = require('./config.json');
const sodium = require('libsodium-wrappers');
const opus = require('opusscript');
const env = require('dotenv').config();

const client = new Discord.Client();

const xisCotation = config.cotation;
const prefix = config.prefix;

var startTime;

client.once('ready', () => {
    console.log('Xis Salada is online');
});

client.on('message', message => {

    // Commands with no prefix.
    if (message.content.search('xis') != -1) {
        if (message.author.id === "282274758907658240" && !message.author.bot){
            message.channel.send("Não falo com quem faz xis de chocolate.")
        }else{
            message.reply('oi xuxu');
        }
    }

    // Commands with prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Converte um valor em reais para xis.
    if (command === "test") {
        message.channel.send("heeeya");
    }
    if(command === 'converter') {
        const amount = parseFloat(args[0]) / xisCotation;

        if (!isNaN(amount)) {
            message.channel.send('R$ ' + args[0] + ' = ' + 'X$' + amount.toFixed(2));
        }
    } else if(command === 'fome') {

        let xisImg = "xis" + (Math.floor(Math.random() * 4) + 1) + ".png"; 
        message.channel.send({ files: ["./images/fome_command/" + xisImg] });
    
    }else if (command === 'help'){
        
        message.chanel.send('Comandos: !fome, !converter <valor>, !jingle')

    } else if(command === 'jingle') {

        // Check if the timeout is completed
        if(isJinglePlayable) {
            if(message.member.voice.channel) {
                var voiceChannel = message.member.voice.channel;
                startTime = new Date;

                // Send logo image in the chat
                message.channel.send({ files: ["./images/logo.png"] });
                
                // Play the audio on the voice channel
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play('jingle.mp3');

                    // Exite voice channel after the song is played
                    setTimeout(() => {
                        voiceChannel.leave();
                    }, 30000);

                }).catch(err => console.log(err));
            }
        } else {
            channel.message.reply("Pessoas andam me sabotando (Supremo). Por isso tenho um delay para tocar o maravilhoso jingle.")
        }

    }
});

// to be fixed
function isJinglePlayable() {
    let endTime = new Date;
    console.log(endTime - startTime);
    if (endTime - startTime < config.jigleTimeout) {
        return true;
    } else {
        return false;
    }
}

client.login(process.env.TOKEN);
