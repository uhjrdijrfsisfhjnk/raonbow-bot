const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async () => {
    let rSpeed = 4; 
    let rGuild = '496359248087744513'; // اي دي السيرفر 
    let rRole = '502223021336035359'; // اي دي الرتبة تجيبه عن طريق انك تفعل خاصية ان اي واحد يقدر يمنشن الرتبة و تمنشن الرتبة بالشات وقبل ما تمنشنها حط \
    /* مثال :
    \@TestingRole
    الناتج :
    <@&12345678987654321>
    */
    let rActive = true; /*
    لتفعيل الرينبو حطها : true
    لألغاء الرينبو حطها : false
    */
  rainbow(rSpeed, rGuild, rRole, rActive);
  function rainbow(speed, guildid, roleid, enabled) {
    if(enabled !== true && enabled !== false) throw new Error("SyntaxError: Rainbow enabled state must be true or false.");
    if(enabled === false) return;
    let guild = client.guilds.get(guildid);
    let role = guild.roles.get(roleid);
    let changeSpeed = speed * 1000;

    setInterval(() => {
      role.edit({
        color: 'RANDOM'
      });
    }, changeSpeed);
  }
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', '● Shop'));
});

client.login(process.env.BOT_TOKEN); 
