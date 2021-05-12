const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '!';

client.commands = new Discord.Collection() 
// 명령어 캐시 컬렉션을 클라이언트 내에 선언한다. 해당 방법으로 명령어 파일 내에서도 client.commands로 다른 명령어들에 접근할수 있다.

client.commands.load = dir => {
    for (const file of fs.readdirSync(dir)) {
      const cmd = require(`./commands/${file}`);
      client.commands.set(cmd.name, cmd);
      console.log(cmd);
      console.log(client.commands.map(c => c.name).join(''));
    }
    console.log(client.commands);
}

client.commands.load(__dirname + "/commands");
//해당 파일이 위치한 디렉터리에서 "/commands" 경로를 추가

client.on('ready', () => console.log(`${client.user.tag} 에 로그인됨`));

client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    if (msg.content.slice(0, prefix.length) !== prefix) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
//    console.dir(client.commands());
    console.dir(client.commands.get());
    console.dir(command);
    let cmd = client.commands.get();
    //get는 컬렉션 내에 해당 key 값을 가진 데이터가 없으면 falsy 값을 반환하므로 부분적으로 Collection#has처럼 사용할수 있습니다.
    console.log(cmd);
    if(cmd) cmd.run(client, msg, args);
})
client.login(``)