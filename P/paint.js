window.onload = function() {

  document.ontouchmove = function(e){ e.preventDefault(); }

  var canvas  = document.getElementById('main');
  var canvastop = canvas.offsetTop

  var context = canvas.getContext("2d");

  var lastx;
  var lasty;

  context.strokeStyle = "#000000";
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.lineWidth = 5;

  function clear() {
    context.fillStyle = "#ffffff";
    context.rect(0, 0, 300, 300);
    context.fill();
  }

  function dot(x,y) {
    context.beginPath();
    context.fillStyle = "#000000";
    context.arc(x,y,1,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.closePath();
  }

  function line(fromx,fromy, tox,toy) {
    context.beginPath();
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.stroke();
    context.closePath();
  }

  canvas.ontouchstart = function(event){                   
    event.preventDefault();                 
    
    lastx = event.touches[0].clientX;
    lasty = event.touches[0].clientY - canvastop;

    dot(lastx,lasty);
  }

  canvas.ontouchmove = function(event){                   
    event.preventDefault();                 

    var newx = event.touches[0].clientX;
    var newy = event.touches[0].clientY - canvastop;

    line(lastx,lasty, newx,newy);
    
    lastx = newx;
    lasty = newy;
  }

function iter(){if (l.length<10){l.push(one);}else{l.shift();l.push(one);}}
function white(id){document.getElementById(id).style.background="white";}
function color(colour){c.beginPath();c.strokeStyle=colour;c.fillStyle=colour;c.closePath();}
function events(){b.onmousedown=md;b.onmouseup=mu;b.onmousemove=mv;}
function md(e){one=c.getImageData(0,0,b.width,b.height);iter();img=c.getImageData(0,0,b.width,b.height);sX=e.x;sY=e.y;pulse="on";}
function mu(e1){eX=e1.x;eY=e1.y;pulse="off";}
function mv(e2){mX=e2.x;mY=e2.y;if (pulse=="on" && (item=='e' || item=='f')){draw();}else if (pulse=='on'){c.putImageData(img,0,0);draw();}}
function rectangle(){events();item="a";}
function circle(){events();item='b';}
function line(){events();item='c';}
function pencil(){events();item='d';}
function erase(){item='e';events();}
function spray(){item='f';events();}
function undo(){if(l.length>=1){b.width=b.width;c.putImageData(l[l.length-1],0,0);l.pop();}}

  var clearButton = document.getElementById('clear')
  clearButton.onclick = clear

  clear()
}