var move = {
    "speedX":0,
    "speedY":0
}

Crafty.init(document.getElementById('game'));

Crafty.timer.FPS(120);

Crafty.background('LimeGreen');

var player = Crafty.e("2D","Color","DOM","player")
.attr({x:window.innerWidth/2-window.innerWidth/18,y:window.innerHeight/2-window.innerWidth/18,w:window.innerWidth/9,h:window.innerWidth/9})
.color("white")
.origin("center")
setInterval(function() {
    if(move.speedX!=0&&move.speedY!=0) {
    player.x+=move.speedX;
    player.y+=move.speedY;
    Crafty.viewport.x=-(player.x-window.innerWidth/2+player.w/2);
    Crafty.viewport.y=-(player.y-window.innerHeight/2+player.h/2);
    }
},10);

var player_nick = Crafty.e("2D","DOM","Text","player_nick")
.attr({x:window.innerWidth/2-window.innerWidth/13,y:window.innerHeight/2-window.innerWidth/18+window.innerWidth/8.5,w:window.innerWidth/6,h:window.innerWidth/12})
.textAlign('center')
.text("петух228")
.textFont({ size: window.innerWidth/25+'px', weight: 'bold' })

player.attach(player_nick)

var dj = Crafty.e("2D","Color", "dj", "DOM")
.attr({x:window.innerWidth/2-window.innerWidth/6,y:window.innerHeight-window.innerWidth/2,w:window.innerWidth/3,h:window.innerWidth/3})
.color("skyblue")

var djm = Crafty.e("2D","Color", "djm", "DOM","Draggable","MouseDrag","Mouse")
.attr({x:window.innerWidth/2-window.innerWidth/17,y:window.innerHeight-window.innerWidth/2+dj.w/2-window.innerWidth/17,w:window.innerWidth/8.5,h:window.innerWidth/8.5})
.color("blue")
.enableDrag()

.bind("StopDrag", function(){

djm.x=dj.x+dj.w/2-window.innerWidth/17;
djm.y=dj.y+dj.w/2-window.innerWidth/17;
var howToStop = 50;
var howToX = move.speedX/howToStop;
var howToY = move.speedY/howToStop;
var setIntToStop = setInterval(function() {
if(howToStop>0) {
    move.speedX-=howToX;
    move.speedY-=howToY;
    howToStop-=1;
} else {
    clearInterval(setIntToStop);
}
},1);
})

.bind("Dragging", function() {
    if(djm.x<dj.x-djm.w/2) {
        djm.x=dj.x-djm.w/2;
    }
    if(djm.x>dj.x+dj.w-djm.w/2) {
        djm.x=dj.x+dj.w-djm.w/2;
    }
    if(djm.y<dj.y-djm.h/2) {
        djm.y=dj.y-djm.h/2;
    }
    if(djm.y>dj.y+dj.h-djm.h/2) {
        djm.y=dj.y+dj.h-djm.h/2;
    }
    move.speedX=(djm.x-(dj.x+dj.w/2-window.innerWidth/17))/50;
    move.speedY=(djm.y-(dj.y+dj.w/2-window.innerWidth/17))/50;
})

player.attach(dj)
dj.attach(djm)

for(var i=0;i<=20;i++) {
Crafty.e("2D,DOM,Color")
.attr({x:Crafty.math.randomNumber(0,5000),y:Crafty.math.randomNumber(0,5000),w:50,h:50})
.color("red")
}


