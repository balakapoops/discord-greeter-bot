const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '>ping') {
      msg.reply('pong');
    }
  });

client.on('message', msg => {
    if (msg.content === '>hello') {
      msg.reply('hi!');
    }
  });

client.on('message', msg => {
    if (msg.content === '>baconrate') {
      msg.reply('your bacon is 100% EPIC!');
    }
  });

client.on('message', msg => {
    if (msg.content === '>bacon') {
      msg.reply('that sounds yum!');
    }
  });

client.on('message', msg => {
    if (msg.content === '>dreambacon') {
      msg.reply('your dream breakfast.', {files: ["./images/bacon.png"]});
    }
  });

client.on("guildMemberAdd", member=> {

  var role = member.guild.roles.find ("name", "Creeper");
  member.addRole (role);

  });

client.on('message', message =>{
   
       const channel = member.guild.channels.find(channel => channel.name === "welcome");
       if(!channel) return;
       
       channel.send(`Welcome to the server, ${user}! We hope you have a great time here, just follow the rules!`)
});

client.login(auth.token);