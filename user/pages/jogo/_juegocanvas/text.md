---
title: juegocanvas
image_align: left
---

<html>
<head>
    <script> 
document.onkeydown=function(e){ 
    e=e || window.event; 
    t=e.keyCode || e.charCode; 
    if(t>36 && t<41)return false; 
} 

</script> 
    <meta name="viewport" content="width=device-width, InicarNueva Partida=1.0" />
    <br>
    <style>
        
        canvas {
            border: 1px solid #d3d3d3;
            background-color: #E5E7E9 ;
            margin-top: 6%; 
            margin-left: auto; 
            margin-right: auto;
            display: block;
        } 

        .modalDialog {
            position: fixed;
            font-family: Arial, Helvetica, sans-serif;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 99999;
            opacity: 0;
            -webkit-transition: opacity 400ms ease-in;
            -moz-transition: opacity 400ms ease-in;
            transition: opacity 400ms ease-in;
            pointer-events: none;
        }

        .modalDialog:target {
            opacity: 1;
            pointer-events: auto;
        }

        .modalDialog>div {
            width: 400px;
            position: static;
            margin: 10% auto;
            padding: 5px 20px 13px 20px;
            border-radius: 10px;
            background: #fff;
            background: -moz-linear-gradient(#fff, #999);
            background: -webkit-linear-gradient(#fff, #999);
            background: -o-linear-gradient(#fff, #999);
            -webkit-transition: opacity 400ms ease-in;
            -moz-transition: opacity 400ms ease-in;
            transition: opacity 400ms ease-in;
        }

        .close {
            background: #606061;
            color: #FFFFFF;
            line-height: 25px;
            position: static;
            right: -12px;
            text-align: center;
            top: -10px;
            width: 24px;
            text-decoration: none;
            font-weight: bold;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
            -moz-box-shadow: 1px 1px 3px #000;
            -webkit-box-shadow: 1px 1px 3px #000;
            box-shadow: 1px 1px 3px #000;
        }

        .close:hover {
            background: #00d9ff;
        }
    </style>
</head>

<body onload="startGame()">
    
    <div id="modal"></div>
    <div id="ScoreTable"></div>

            <a href="javascript:location.reload()">Iniciar Nueva Partida </a> 

    <script>

        var myGamePiece;
        var myObstacles = [];
        var myScore;

        function startGame() {
            myGamePiece = new component(30, 30, "/user/img/tierra.gif", 10, 120,"image");
            myScore = new component("30px", "Consolas", "black", 280, 40, "text");
            myGameArea.start();
        }
        var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}
function component(width, height, color, x, y, type) {
    this.type = type;
     if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
             if (type == "image") {
      ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
    } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    
    
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
   
 
   
    for (i = 0; i < myObstacles.length; i += 1) {
   
     var t = 1;
    if(myGameArea.frameNo >=500 && myGameArea.frameNo <=999 ){
        t = 2;
        }
    else{
        if(myGameArea.frameNo >=1000 && myGameArea.frameNo <=1499){
        t=3;
        }
        else{
            if(myGameArea.frameNo >=1500 && myGameArea.frameNo <=1999){
                t=4;
            }
            else{
                if(myGameArea.frameNo >=2000 && myGameArea.frameNo <=2499){
                t=5;
                }
                else{
                    if(myGameArea.frameNo >=2500 && myGameArea.frameNo <=2999){
                        t=6;
                    }
                    else{
                        if(myGameArea.frameNo >=3000){
                        t=7;
                        }
                    }
                }
            }
        }
    }
    
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -t; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = t; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -t; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = t; }
  
        myObstacles[i].speedX = -t;
        myObstacles[i].newPos();
        myObstacles[i].update();
  
    
    }
    
    
   // for (i = 0; i < myObstacles.length; i += 1) {
   
     //   myObstacles[i].x += -3;
       // myObstacles[i].update();
        
       
    //}
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}
function moveup() {
    myGamePiece.speedY = -1; 
}
function movedown() {
    myGamePiece.speedY = 1; 
}
function moveleft() {
    myGamePiece.speedX = -1; 
}
function moveright() {
    myGamePiece.speedX = 1; 
}
function clearmove() {
    myGamePiece.speedX = r;
    myGamePiece.speedY = 0;
}

         </script>
    <br>
 <p>1. Remplazar botones por teclas con flechas</p>
<p> 2. añadir gravedad</p>
<p> 3. Evitar que salga la figura del marco</p>
<p> 4. Remplazar el cuadro rojo</p>
<p> 5. Incrementar la velocidad un 20% cada 500 puntos</p>
</body>
</html>
