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

//"📯📯📯뿌〰️아이고 깜짝이야😵어?핑핑아🐌오늘이 무슨요일이야? 먀~🐌월요일?😲아~월요일🎷월요일🌝좋아〰️🙆‍♀️최고로 좋아〰️🙆‍♀️난🧀일할때🍔제일 멋지지😎오늘부터💪열심히🧠할거야 오좋아💩월요일 좋아〰️🛁같이 불러🎙핑핑아🐌냔냔냐냐냐〰️냔냔냐냐냐〰️월요일🎶월요일🎶월요일🥁월요일 좋아〰️🦑제발 좀 조용히해🤬월요일이 좋아서 난리떠는🤸‍♀️멍청이는 이세상에 너뿐🧀일꺼야🗿⭐️월요일 좋아🦑맙소사🤯진짜 맛있는 날이야💨🦑제발 그만 해💦냠냠 게살버거 넌 세🍔개🍔먹어🍔오예 노래하자🎤내월요일🧀좋아〰️월요일🦑좋아⭐️〰"

// let nt = now.getTime(); // 현재의 시간만 가져온다
// let wt = work.getTime(); // 오픈시간만 가져온다
// let et = end.getTime(); // 종료시간만 가져온다.

let weekName = new Array('일','월','화','수','목','금','토'); 


//현재
let now = new Date(); //현재시간을 구한다. 
let end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),18,00,00);
let quit = new Date("May 31,2021,18:00:00").getTime();
let et = end.getTime(); // 종료시간만 가져온다.

const tripCount = () => {
  let trip = new Date("Jun 18,2021,00:00:00");
  let now = new Date(); //현재시간을 구한다. 
  const remainDate = trip - now;
  var d = Math.floor(remainDate / (1000 * 60 * 60 * 24));
  var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainDate % (1000 * 60)) / 1000);
  if(s < 10){
      s = '0'+s;
  }
  const result = ` ᕕ( ᐛ )ᕗ  ⎛⎝⎛° ͜ʖ°⎞⎠⎞  여행까지 D-${d}  ⎛⎝⎛° ͜ʖ°⎞⎠⎞  ᕕ( ᐛ )ᕗ `;

  return result;
}

const jonggang = () => {
  let gunJonggang = new Date("Jun 17,2021,15:00:00");
  let hyungJonggang = new Date("Jun 14,2021,15:00:00");
  let now = new Date(); //현재시간을 구한다. 
  const remainDate = gunJonggang - now;
  const remainDate2 = hyungJonggang - now;
  var d = Math.floor(remainDate / (1000 * 60 * 60 * 24));
  var d2 = Math.floor(remainDate2 / (1000 * 60 * 60 * 24));
  var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainDate % (1000 * 60)) / 1000);
  if(s < 10){
      s = '0'+s;
  }
  const result = ` ◝(・ω・)◟형기 종강 D-${d2}\n(~˘▾˘)~ 건우 종강 D-${d}`;

  return result;
}

 

const quitCount = () => {
    let quit = new Date("May 31,2021,18:00:00");
    let now = new Date(); //현재시간을 구한다. 
    const remainDate = quit - now;
    let i = 0;
    let count = 0;
    let quitDday = quit.getDate();
    let quitDate = now.getDate();
    var d = Math.floor(remainDate / (1000 * 60 * 60 * 24));
    var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((remainDate % (1000 * 60)) / 1000);
    if(s < 10){
        s = '0'+s;
    }
    for( let i = 0 ; quitDate+i <= quitDday; i++){
        let qd = new Date(now.getFullYear(),now.getMonth(),now.getDate()+i,18,00,00);
          if(quitDate+i !== 5 && quitDate+i !== 19 && qd.getDay() !== 6 && qd.getDay() !== 0){
            count++;
            console.log( "i : "+i + " day : "+ qd.getDate());
          }
      }
    const result = ` ε⌯(ง ˙ω˙)ว 문더니 퇴사까지 
    ${d}일 ${h}시간 ${m}분 ${s}초\ 남았습니당~ (ᗒᗣᗕ)՞
    공휴일, 주말 빼면 ${count}일 ${h}시간 ${m}분 ${s}초 남았구요~ ( ง ᵒ̌ ∽ᵒ̌)ง⁼³₌₃ `;
    
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

  if(now.getDay() === 6 || now.getDay() === 0){
    result = "오늘은 주말이라 출근 안했습니다~ ¯＼_(ツ)_/¯ ";
  }
  else if(now.getDate() === 7 || now.getDate() === 19){
    result = "오늘 문선이는 쉬었습니다~  ◟( ˘ ³˘)◞";
  }
  else if(h < 0){
    result = "6시 넘어서 문더니 퇴근했습니다~ \n수고했어 문더니~~ ε⌯(ง ˙ω˙)ว ";
  }
  else if(m < 0 || s < 0 ){
    result = "6시 넘어서 문더니 퇴근했습니다~ \n아마도~~  ᕕ( ᐛ )ᕗ ";
  } 
  else{
  result = "문더니 퇴근까지\n"+h+'시간 '+m+'분 '+s+'초 남았습니당~\n문더니 수고~ _:(´ཀ`」 ∠):_ ';
  }
  return result;
}


const workCount = () => {
  let now = new Date(); //
  let work = new Date(now.getFullYear(),now.getMonth(),(now.getDate()+1),09,00,00);
  let wt = work.getTime(); // 오픈시간만 가져온다
  const remainDate = wt - now;
  let result = '';
  var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainDate % (1000 * 60)) / 1000);
  if(s < 10){
      s = '0'+s;
  }
  if(work.getDay() === 6 || work.getDay() === 0){
    result = "내일은 주말입니다~~ 잘쉬세용~";
  }else{
    result = "문더니 출근까지\n"+h+'시간 '+m+'분 '+s+'초 남았습니당 ˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ \n문더니 화이팅~ (ง •̀_•́)ง ';
  }
  return result;
}

const nowTimeCount = () => {
  const date = new Date();
  const Hours = date.getHours();
  const mins = date.getMinutes();
  const sec = date.getSeconds();
  const result = `현재 ${Hours}시 ${mins}분 ${sec}초 입니다~`;
  return result;
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  switch(msg.content){
    case '종강': 
    msg.reply(jonggang());  
    break;  
    case '여행': 
        msg.reply(tripCount());  
        break;  
    case '퇴근 언제해':
    case '퇴근언제야':
    case '퇴근 언제야':      
    case '퇴근':           
    case '퇴근해':           
    case '퇴근해!':           
    case '문더나 퇴근해!':   
    case '퇴근언제해':
    case '언제 퇴근해':     
    case '언제퇴근해':     
      msg.reply(workendCount());  
      break;  
    case '출근 언제해':
    case '출근언제야':
    case '출근 언제야':
    case '출근':           
    case '출근해':    
    case '출근해!':    
    case '문더나 출근해!':   
    case '출근언제해':
    case '언제 출근해':     
    case '언제출근해':     
      msg.reply(workCount());
      break;
    case '퇴사 언제해':
    case '퇴사언제야':
    case '퇴사 언제야':           
    case '문더나 퇴사언제해':   
    case '퇴사언제해':
    case '언제 퇴사해':     
    case '언제퇴사해':
    case '퇴사':
    case '퇴사일':
    case '퇴사날짜':
    case '퇴사날':
      msg.reply(quitCount());
      break;
    case '지금 몇시야':
    case '지금몇시야':
    case '몇시야':
    case '몇시니':
      msg.reply(nowTimeCount());
      break;
    }
  
});


client.login(ODM5MDMzMTM5NjIzNDkzNjYy.YJDwgA.lETu-b8R-CfPxhXhixfjEQWI8tw);