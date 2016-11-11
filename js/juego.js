var x=0, y=0;//coordenadas iniciales de la imagen

function lienzo(){

var c=document.getElementById("imagenju");
var ctx=c.getContext("2d");
var img=document.getElementById("imaju");
ctx.clearRect(0,0,0,0);//limpia todo el canvas 
ctx.drawImage(img,x,y,50,50);//dibuja la imagen

}

//cuando presiona una tecla
function whichButton(event){

if(event.keyCode=='39'){

x=x+5;
lienzo();

}

if(event.keyCode=='37'){

x=x-5;
lienzo();

}

if(event.keyCode=='38'){

y=y-5;//
lienzo();

}

if(event.keyCode=='40'){

y=y+5;
lienzo();

}

}