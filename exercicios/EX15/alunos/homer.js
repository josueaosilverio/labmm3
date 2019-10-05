var interval;
var intervalanima;
var inc=0;
var doh=new Audio;
doh.src="audio/doh.mp3";
var lado="right";
var segundos=0;
var jumping = false;
var contador=0;

window.onload=startAnimation;
document.onkeypress = function (event) {
    processaTecla(event);
};

function startAnimation() {
    for (var i=0; i<=2; i++){
        document.getElementById("buraco"+i).style.position="absolute";
        document.getElementById("buraco"+i).style.top="195px";
        document.getElementById("buraco"+i).style.left="-250px";
    }
    document.getElementById("buraco0").style.left=Math.floor(Math.random()*751+100)+"px";
    document.getElementById("homer").style.left="0px";
    document.getElementById("homer").style.top="135px";
    interval=setInterval(homerAnimation,100)
}

function homerAnimation() {
    contador++;
    if(contador==10){
        segundos++;
        contador=0;
    }
    if(lado=="right") {
        document.getElementById("homer").style.left = parseInt(document.getElementById("homer").style.left) + 5 + "px";
        inc++;
        document.getElementById("homer").src = "imagens/homer_mov/" + lado + "/homer_" + inc + ".png";
        if (inc == 8) {
            inc = 0;
        }
    }

    if(lado=="left") {
        document.getElementById("homer").style.left = parseInt(document.getElementById("homer").style.left) - 5 + "px";
        inc++;
        document.getElementById("homer").src = "imagens/homer_mov/" + lado + "/homer_" + inc + ".png";
        if (inc == 8) {
            inc = 0;
        }
    }

    if(parseInt(document.getElementById("homer").style.left)+41>=1000) {
        lado="left";
    }
        detetaColisao();
}

function detetaColisao() {
    for (var i=0; i<=2; i++){
        if (parseInt(document.getElementById("homer").style.left)+35>=parseInt(document.getElementById("buraco"+i).style.left) &&
            parseInt(document.getElementById("homer").style.left)+35<=parseInt(document.getElementById("buraco"+i).style.left)+76 &&
            parseInt(document.getElementById("homer").style.top)+72>=195&&
            parseInt(document.getElementById("homer").style.top)+72<=212
        ) {
            clearInterval(interval);
            doh.play();
            alert("Durou "+segundos+" segundos")
        }
    }
}

function processaTecla(evt) {
    switch (evt.keyCode){
        case 32:
            if (!jumping){
                jumping=true;
                salta();
            }
    }
}
function salta() {
    console.log(document.getElementById("homer").style.top);
    var homerV = parseInt(document.getElementById("homer").style.top);
    var height = 0;
    var up = true;
    var salto = setInterval(function () {
        if (height == 65)
            up = false;
        if (up)
            height += 5;
        else {
            height -= 5;
            if (height == 0)
                clearInterval(salto);
        }
        document.getElementById("homer").style.top = homerV - height + "px";
        console.log(homerV);
    }, 100);
}