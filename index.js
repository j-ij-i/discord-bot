const Discord = require('discord.js');
const client = new Discord.Client();

//완료- 퇴사 몇일 몇시간 몇분남앗는지 알려줌

// 추가 기능
// 퇴사 날까지 주말, 공휴일 빼주기
// 오늘 퇴근이 언제인지 알려줌

// if 평일이면 오늘 출근일이라고 알려줌
// else if 5월 5일, 5월 19일 공휴일

// //퇴근
// let end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),18,00,00);
// //출근



// let nt = now.getTime(); // 현재의 시간만 가져온다
// let wt = work.getTime(); // 오픈시간만 가져온다
// let et = end.getTime(); // 종료시간만 가져온다.

let weekName = new Array('일','월','화','수','목','금','토'); 


//현재
let now = new Date(); //현재시간을 구한다. 
let end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),18,00,00);
let work = new Date(now.getFullYear(),now.getMonth(),(now.getDate()+1),09,00,00);
let quit = new Date("May 31,2021,18:00:00").getTime();
let et = end.getTime(); // 종료시간만 가져온다.
let wt = work.getTime(); // 오픈시간만 가져온다


const quitCount = () => {
    let now = new Date(); //현재시간을 구한다. 
    const remainDate = quit - now;
    var d = Math.floor(remainDate / (1000 * 60 * 60 * 24));
    var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((remainDate % (1000 * 60)) / 1000);
    if(s < 10){
        s = '0'+s;
    }
    const result = "문더니 퇴사까지\n"+d+'일 '+h+'시간 '+m+'분 '+s+'초 남았습니당~\n문더니 수고~';
    return result;
}

const workendCount = () => {
  let now = new Date(); //현재시간을 구한다. 
  const remainDate = et - now;
  let result = '';
  var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainDate % (1000 * 60)) / 1000);
  if(s < 10){
      s = '0'+s;
  }
  if(m < 0 || s < 0 ){
    result = "6시 넘어서 문더니 퇴근했습니다~ \n아마도~~";
  }
  else if(h < 0){
    result = "문더니 퇴근했습니다~~\n문더니 축하해~~";
  }
  else{
  result = "문더니 퇴근까지\n"+h+'시간 '+m+'분 '+s+'초 남았습니당~\n문더니 수고~';
  }
  return result;
}


const workCount = () => {
  let now = new Date(); //현재시간을 구한다. 
  const remainDate = wt - now;
  var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainDate % (1000 * 60)) / 1000);
  if(s < 10){
      s = '0'+s;
  }
  const result = "문더니 출근까지\n"+h+'시간 '+m+'분 '+s+'초 남았습니당~\n문더니 화이팅~';
  return result;
}

const nowTimeCount = () => {
  let now = new Date(); //현재시간을 구한다. 
  const remainDate = now;
  var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainDate % (1000 * 60)) / 1000);
  if(s < 10){
      s = '0'+s;
  }
  const result = "현재 시간은 "+h+'시 '+m+'분 '+s+'초 입니다~';
  return result;
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '퇴근 언제해' ) {  // 언제 퇴근해 퇴근 퇴근하고싶어 등등 
    msg.reply(workendCount());
  }
  else if (msg.content === '출근 언제해') {
    msg.reply(workCount());
  }
//  else if (msg.content === '지금 몇시야') {
//    msg.reply(nowTimeCount());
//  }
  else if (msg.content === '퇴사 언제해') {
    msg.reply(quitCount());
  }
  
});


client.login('');