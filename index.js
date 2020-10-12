 //баланс
 let balance = 0;
 let balance_speed = 0;
 let balance_click = 0.01;

 let server_max = 10;
 let server_zanato = 0;

 let video_cards_1 = 0;
 let pross_1 = 0;

 let server_temp = 68*Math.ceil((video_cards_1+pross_1)/100);

 let mines = [0.01, 0.02, 0.03, 0.04, 0.05,0.1,0.2,0.3,0.4,0.5];
 let prosIvideo_prices = [1 , 2 , 3 , 4 , 5 , 8  , 11 , 14 , 17 , 20 , 27 , 34 , 41 , 48 , 55 , 60 , 75 , 90 , 115 , 130 , 165 , 200 , 235 , 270 , 305 , 400 , 500 , 600 , 700 , 800 , 900 , 1000 , 1250, 1500 , 1750 , 2000 , 2250 , 2750 , 3250 , 4000 , 4750 , 5500 , 6250 ,7000 , 7750 , 8500 , 9250, 10000 , 15000, 20000 ];

 var server_lvl = 1;
 var server_up_prices = [20,50,150,500,1750,5000,17500,50000,100000];


function tempS() {
var tempI = document.getElementById('temp');
tempI.innerText = (server_temp) + '°С';
}

function serverSet() {
var serverI = document.getElementById('server_zanato');
serverI.innerText = video_cards_1 + pross_1 + '/' + server_max;
}

 function prow(){
 if(balance>=1000) {
   if(balance>=1000000) {
     if(balance>=1000000000) {
var balanceI = document.getElementById('balance');
balanceI.innerText = Math.round((balance/1000000000)*100)/100 + 'B R'
} else {
 var balanceI = document.getElementById('balance');
balanceI.innerText = Math.round((balance/1000000)*100)/100 + 'M R'
}
   }
else {
var balanceI = document.getElementById('balance');
balanceI.innerText =Math.round((balance/1000)*100)/100 + 'K R'
}
 }
 else {
 var balanceI = document.getElementById('balance');
 balanceI.innerText = balance + ' R'
 }}

 function click(){
 if(balance_click>=1000) {
   if(balance_click>=1000000) {
     if(balance_click>=1000000000) {
var clickI = document.getElementById('click');
clickI.innerText = Math.round((balance_click/1000000000)*100)/100 + 'B/клик'
} else {
 var clickI = document.getElementById('click');
clickI.innerText = Math.round((balance_click/1000000)*100)/100 + 'M/клик'
}
   }
else {
var clickI = document.getElementById('click');
clickI.innerText =Math.round((balance_click/1000)*100)/100 + 'K/клик'
}
 }
 else {
 var clickI = document.getElementById('click');
 clickI.innerText = Math.round(balance_click*100)/100 + '/клик'
 }}

 function pros_i_video() {
   var prosI = document.getElementById('pros_1');
   var videoI = document.getElementById('video_card_1');
   prosI.innerText = pross_1 + ' шт';
   videoI.innerText = video_cards_1 + ' шт';
 }

 function speed() {
   if(balance_speed>=1000) {
   if(balance_speed>=1000000) {
     if(balance_speed>=1000000000) {
       var speedI = document.getElementById('mining');
speedI.innerText = Math.round((balance_speed/1000000000)*100)/100 + 'B/сек'
} else {
 var speedI = document.getElementById('mining');
 speedI.innerText = Math.round((balance_speed/1000000)*100)/100 + 'M/сек'
}
   }
else {
 var speedI = document.getElementById('mining');
 speedI.innerText =Math.round((balance_speed/1000)*100)/100 + 'K/сек'
}
 }
 else {
   var speedI = document.getElementById('mining');
   speedI.innerText = (balance_speed*100)/100 + '/сек'
 }}

 start();
 function start() {
 prow();
 speed();
 click();
 serverSet();
 tempS();
 pros_i_video();
 }




 setInterval(mainingC,1000);
 function mainingC() {
 balance = Math.round((balance+balance_speed)*100)/100;
 prow();
 
 tempS();
 }




 //меню
var coin = document.getElementById('coin');
var server= document.getElementById('server');
var ect = document.getElementById('ect');

coin.onclick = function() {
document.getElementById('coin').style.color= 'black';
document.getElementById('server').style.color= 'grey';
document.getElementById('ect').style.color= 'grey';

document.getElementById('click_panel').style.display= 'block';

document.getElementById('server_panel').style.display= 'none';

document.getElementById('video_card_panel').style.display= 'none';
document.getElementById('pros_panel').style.display= 'none';
}

ect.onclick = function() {
document.getElementById('coin').style.color= 'grey';
document.getElementById('server').style.color= 'grey';
document.getElementById('ect').style.color= 'black';

document.getElementById('click_panel').style.display= 'none';

document.getElementById('server_panel').style.display= 'none';

document.getElementById('video_card_panel').style.display= 'none';
document.getElementById('pros_panel').style.display= 'none';
}

server.onclick = function() {
document.getElementById('coin').style.color= 'grey';
document.getElementById('server').style.color= 'black';
document.getElementById('ect').style.color= 'grey';

document.getElementById('click_panel').style.display= 'none';

document.getElementById('server_panel').style.display= 'block';

document.getElementById('video_card_panel').style.display= 'block';
document.getElementById('pros_panel').style.display= 'block';

server_prow();
}

function server_prow() {
var pros_price = prosIvideo_prices[pross_1];
if ( balance >= pros_price&video_cards_1+pross_1 < server_max&pross_1 < server_max/2) {
document.getElementById('pros_buy').style.opacity = 1;
} else {
 document.getElementById('pros_buy').style.opacity = 0.5;
}

var video_price = prosIvideo_prices[video_cards_1];
if ( balance >= video_price&video_cards_1+pross_1 < server_max&video_cards_1 < server_max/2) {
document.getElementById('video_buy').style.opacity = 1;
} else {
 document.getElementById('video_buy').style.opacity = 0.5;
}

var server_price = server_up_prices[server_lvl-1];
if (server_lvl <= 9&&balance>=server_price) {
 document.getElementById('server_up').style.opacity = 1;
} else {
 if (server_lvl == 10) {
   document.getElementById('server_up_name').innerText = 'MAX';
   document.getElementById('server_up_name').style.left = 0+'px';
   document.getElementById('server_up_name').style.top = -22+'px';
 }
 document.getElementById('server_up').style.opacity = 0.4;
}

 prow();
 speed();
 click();
 serverSet();
 tempS();
 pros_i_video();
}

//клик

document.getElementById('click_panel').onclick = function() {
balance = Math.round((balance+balance_click)*100)/100;
prow();
}

//сервер up
document.getElementById('server_up').onclick = function() {
var server_price = server_up_prices[server_lvl-1];
if (server_lvl <= 9&&balance>=server_price) {
 balance = Math.round((balance-server_price)*100)/100;
 server_lvl += 1;
 server_max += 10;
 server_prow();
}
}



//покупка видях
var videoBuy = document.getElementById('video_buy');

videoBuy.onclick = function() {
var remine = Math.floor(video_cards_1/5);
let mine = mines[remine];
var video_price = prosIvideo_prices[video_cards_1];
if (balance >= video_price&video_cards_1+pross_1 < server_max&video_cards_1 < server_max/2) {
video_cards_1 += 1;
balance_speed = Math.round((balance_speed+mine)*100)/100;
speed();
balance = Math.round((balance-video_price)*100)/100;
pros_i_video();
serverSet()
server_prow();
}
}




//покупка проц
var prosBuy = document.getElementById('pros_buy');

prosBuy.onclick = function() {
var remine = Math.floor(pross_1/5);
let mine = mines[remine];
var pros_price = prosIvideo_prices[pross_1];
if (balance >= pros_price&video_cards_1+pross_1 < server_max&pross_1 < server_max/2) {
pross_1 += 1;
balance_click = Math.round((balance_click+mine)*100)/100;
click();
balance = Math.round((balance-pros_price)*100)/100;
pros_i_video();
serverSet();
server_prow();
}
}
