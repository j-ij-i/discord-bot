const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
//완료- 퇴사 몇일 몇시간 몇분남앗는지 알려줌

//현재
let now = new Date(); //현재시간을 구한다. 
let end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),18,00,00);
let quit = new Date("May 28,2021,18:00:00").getTime();
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
  const result = tripoutput(trip.getMonth()+1, trip.getDate(), d);
  return result;
}
const tripoutput = ( month, date, dday) =>{
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor("#df7ff4")
	.setTitle(":school_satchel:"+"여행"+":two_men_holding_hands: :two_women_holding_hands:")
  .addFields(
		{ name: "여행 날짜"+":bullettrain_side: ", value: `${month}월 ${date}일 `, inline: true },
		{ name: '남은 날짜'+":date: ", value: `(ง˙∇˙)ว D - ${dday} (ว˙∇˙)ง`, inline: true },
	)
  return exampleEmbed;
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
  const result = jonggangoutput(hyungJonggang.getMonth()+1, hyungJonggang.getDate(),d2,gunJonggang.getMonth()+1, gunJonggang.getDate(),d);
  return result;
}

const jonggangoutput = ( month1, date1, dday1, month2, date2, dday2) =>{
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor("#df7ff4")
	.setTitle("형기 & 건우 종강")
  .addFields(
		{ name: "형기 종강", value: `${month1}월 ${date1}일 ⎛⎝⎛° ͜ʖ°⎞⎠⎞ `, inline: true },
		{ name: '남은 날짜', value: `(ง˙∇˙)ว D - ${dday1}`, inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: "건우 종강", value: `${month2}월 ${date2}일 ⎛⎝⎛° ͜ʖ°⎞⎠⎞ `, inline: true },
		{ name: '남은 날짜', value: `(ว˙∇˙)ง D - ${dday2} `, inline: true },
	)
  return exampleEmbed;
}


const quitCount = () => {
    let quit = new Date("May 28,2021,18:00:00");
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
    const result = quitoutput(quit, count, h, m, s);
    return result;
}

const quitoutput = (quit, count, h, m, s) =>{
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor("#df7ff4")
	.setTitle('문더니 퇴사 '+':woman_office_worker:')
  .addFields(
		{ name: "퇴사날", value: `${quit.getMonth()+1}월 ${quit.getDate()}일`, inline: true },
		{ name: '남은 날짜', value: `D - ${count}`, inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: "카운트 다운", value: `:stopwatch: `+`${count}일 ${h}시간 ${m}분 ${s}초 남았습니다!`, inline: true },
	)
  return exampleEmbed;
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
  }else if(now.getDate() === 7 || now.getDate() === 19){
    result = "오늘 문선이는 쉬었습니다~  ◟( ˘ ³˘)◞";
  }else if(now.getHours() < 9){
    result = "문더니 아직 출근 안했습니다 ͡° ͜ʖ ͡° ";
  }else if(h < -1){
    result = "문더니 퇴근했습니다~ \n수고했어 문더니~~ ε⌯(ง ˙ω˙)ว ";
  }else if(m < 0 || s < 0 ){
    result = "6시는 넘었지만 문더니가 퇴근 했을수도 있고 (૭ ᐕ)૭ \n아닐수도 있습니다 ŏ̥̥̥̥םŏ̥̥̥̥  ";
  }else{
    result = "문더니 퇴근까지\n"+h+'시간 '+m+'분 '+s+'초 남았습니당~\n문더니 수고~ _:(´ཀ`」 ∠):_ ';
  }
  result = workendOutput(result);
  return result;
}
const workendOutput = (result) => {
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor("#df7ff4")
  .addFields(
		{ name: "퇴근", value: result, inline: true },
	)
  return exampleEmbed;
}

const workCount = () => {
  let now = new Date();
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
  }else if(now.getHours() < 18){
    result = "문더니 아직 퇴근 안했습니다 ͡° ͜ʖ ͡° ";
  }
  else{
    result = "문더니 출근까지\n"+h+'시간 '+m+'분 '+s+'초 남았습니당 ˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ \n문더니 화이팅~ (ง •̀_•́)ง ';
  }
  result = workCountOutput(result);
  return result;
}

const workCountOutput = (result) => {
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor("#df7ff4")
  .addFields(
		{ name: "출근", value: result, inline: true },
	)
  return exampleEmbed;
}

const nowTimeCount = () => {
  const date = new Date();
  const Hours = date.getHours();
  const mins = date.getMinutes();
  const sec = date.getSeconds();
  const result = ` ƪ( ˘ ⌣˘ )ʃ  현재 ${Hours}시 ${mins}분 ${sec}초 입니다~ ୧(-᷅‎ہ-᷄)୨ `;
  return result;
}
const birth = (msg) => {
  let gun = new Date("Sep 19,2021,00:00:00");
  let hyung = new Date("Aug 26,2021,00:00:00");
  let sun = new Date("Jul 16,2021,00:00:00");
  let moon = new Date("Jun 1,2021,00:00:00");
  let now = new Date(); //현재시간을 구한다. 
  const remainDate = gun - now;
  const remainDate2 = hyung - now;
  const remainDate3 = sun - now;
  const remainDate4 = moon - now;
  var d = Math.floor(remainDate / (1000 * 60 * 60 * 24));
  var d2 = Math.floor(remainDate2 / (1000 * 60 * 60 * 24));
  var d3 = Math.floor(remainDate3 / (1000 * 60 * 60 * 24));
  var d4 = Math.floor(remainDate4 / (1000 * 60 * 60 * 24));
  var h = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((remainDate % (1000 * 60)) / 1000);
  if(s < 10){
      s = '0'+s;
  }
  let result;
  console.log(msg);
  switch(msg){
  case "문선생일":
  case "문선 생일":
  case "문던생일":
  case "문던 생일":
  result = birthoutput(msg, moon.getMonth()+1,moon.getDate(),d4,"#df7ff4");
  break;
  case "선민 생일":   
  case "선민생일":
  case "던민 생일":   
  case "던민생일":   
  result = birthoutput(msg, sun.getMonth()+1,sun.getDate(),d3,"#f96d80");
  break;
  case "형기 생일":   
  case "형기생일":   
  result = birthoutput(msg, hyung.getMonth()+1,hyung.getDate(),d2,"#969696");
  break;
  case "건우생일":
  case "건우 생일":
  result = birthoutput(msg, gun.getMonth()+1,gun.getDate(),d,"#4ee8ba");
  break;
  }
  return result;
}

const birthoutput = (msg, month, date, dday, color) =>{
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor(color)
	.setTitle(msg+' :birthday:')
  .addFields(
		{ name: "생일", value: `${month}월 ${date}일`, inline: true },
		{ name: '남은 날짜', value: `D - ${dday}`, inline: true },
	)
  return exampleEmbed;
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
    case '퇴근':           
      msg.reply(workendCount());  
      break;  
    case '출근':           
      msg.reply(workCount());
      break;
    case '퇴사':
      msg.reply(quitCount());
      break;
    case '현재시간':
      msg.reply(nowTimeCount());
      break;
    case '생일':
    case "문던생일":
    case "문던 생일":
    case "문선생일":
    case "문선 생일":
    case "선민 생일":   
    case "선민생일":   
    case "던민 생일":   
    case "던민생일":   
    case "형기 생일":   
    case "형기생일":   
    case "건우생일":
    case "건우 생일":
    msg.reply(birth(msg.content));
    break;

    case "test":
    msg.channel.send(Test());
    break;
    }
});
console.log(process.env.APPLE);

client.login(`${process.env.TK}`);
