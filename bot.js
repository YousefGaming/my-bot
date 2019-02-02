client.on('message', msg => {
    if(msg.content.startsWith('bot')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : yousef`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Yousef ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`My Bot | Yousef Bot`,"http://twitch.tv/TeSt")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);
