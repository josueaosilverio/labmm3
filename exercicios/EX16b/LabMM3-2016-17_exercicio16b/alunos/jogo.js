var casco = 100;
var velocidade = 10;
var numNaves = 0;
var playing = 1;
var tempojogo = 15;
var varrelogio;
var pontuacao;
var interatualiza;
var contador=0;
var tiroativo=false;


window.onload = carregaElementos;

function carregaElementos() {
    document.getElementById("fimJogo").style.display = "none";
    for (var i = 1; i < 4; i++) {
        document.getElementById("inimiga" + i).style.top = Math.floor(Math.random()*(-360)-70)+"px";
        var rand = Math.floor(Math.random()*601+20);
        document.getElementById("inimiga" + i).style.left = rand+"px";
    }
    document.getElementById("tiro").style.top = "-70px";

    document.getElementById("cascoSpan").innerHTML = "" + casco;
    document.getElementById("navesSpan").innerHTML = "" + numNaves;
    document.getElementById("nave").style.top = "660px"
    document.getElementById("nave").style.left = "295px"
    iniciarMotorJogo();
    document.getElementById("tempoSpan").innerHTML = "" + tempojogo;
    document.body.onkeydown = function (e) {
        processaTecla(e);
    }
}

function iniciarMotorJogo() {
    interatualiza = setInterval("requestAnimationFrame(atualizaJogo)", 1000 / 60);
}

function atualizaJogo() {
    contador++;
    if(contador==60){
        tempojogo--;
        document.getElementById("tempoSpan").innerHTML = "" + tempojogo;
        contador=0;
    }
    if (tempojogo == 10) {
        document.getElementById("tempoSpan").style.color = "red";
    }
    if (tempojogo == 0) {
        fimJogo();
    }
    deslocaNavesInimigas();
    if (tiroativo){
        moverTiro();
    }
}

function fimJogo() {
    clearInterval(varrelogio);
    clearInterval(interatualiza);
    document.getElementById("fimJogo").style.display = "";
    playing = 2;
    pontuacao = casco + (numNaves * 2) + (tempojogo / 2);
    document.getElementById("pontuacaoSpan").innerHTML = "" + pontuacao;
}

function processaTecla(e) {
    if (playing == 1) {
        deslocaNave(e.keyCode);
    }
}

function deslocaNave(direcao) {
    var naveY = parseInt(document.getElementById("nave").style.top);
    var naveX = parseInt(document.getElementById("nave").style.left);
    var bottom=700-parseInt(document.getElementById("nave").style.top);

    //cima
    if (direcao == 38 && naveY > window.innerHeight - 200) {
        document.getElementById("nave").style.top = parseInt(document.getElementById("nave").style.top) - velocidade + "px";
        velocidade = velocidade + (bottom*0.1);
    }
    //baixo
    if (direcao == 40 && naveY < window.innerHeight - 40) {
        document.getElementById("nave").style.top = parseInt(document.getElementById("nave").style.top) + velocidade + "px";
        velocidade = velocidade - (bottom*0.1);
    }
    //direita
    if (direcao == 39 && naveX < window.innerWidth - 140) {
        document.getElementById("nave").style.left = parseInt(document.getElementById("nave").style.left) + velocidade + "px";
    }
    //esquerda
    if (direcao == 37 && naveX > 30) {
        document.getElementById("nave").style.left = parseInt(document.getElementById("nave").style.left) - velocidade + "px";
    }
    if (direcao == 32) {
        ativaTiro();
    }
}

function deslocaNavesInimigas() {
    for (var i = 1; i < 4; i++) {
        document.getElementById("inimiga" + i).style.top = parseInt(document.getElementById("inimiga" + i).style.top)+(velocidade*0.2)+"px";
        if (parseInt(document.getElementById("inimiga" + i).style.top)>=800){
            document.getElementById("inimiga" + i).style.top = Math.floor(Math.random()*(-360)-70)+"px";
            var rand = Math.floor(Math.random()*601+20);
            document.getElementById("inimiga" + i).style.left = rand+"px";
        }
        var nave=document.getElementById("nave");
        var naveW=110;
        var naveH=40;
        var inimiga=document.getElementById("inimiga"+i);
        var inimigaW=parseInt(document.getElementById("inimiga"+i).offsetWidth);
        var inimigaH=parseInt(document.getElementById("inimiga"+i).offsetHeight);
        console.log(verificaColisao(nave,naveH,naveW,inimiga,inimigaH,inimigaW));
    }
}

function ativaTiro() {
    if (tiroativo==false){
        document.getElementById("tiro").style.top=document.getElementById("nave").style.top;
        document.getElementById("tiro").style.left=parseInt(document.getElementById("nave").style.left)+52+"px";
        document.getElementById("tiro").style.display="";
        tiroativo=true;
    }
}
function moverTiro() {
    document.getElementById("tiro").style.top=parseInt(document.getElementById("tiro").style.top)-velocidade+"px";
    if (parseInt(document.getElementById("tiro").style.top)<=-5){
        tiroativo=false;
    }
}

function verificaColisao(elemento1, elemento1Altura, elemento1Largura, elemento2, elemento2Altura, elemento2Largura) {
    return((parseInt(elemento1.style.top)>=parseInt(elemento2.style.top) &&
        parseInt(elemento1.style.top)<=parseInt(elemento2.style.top)+elemento2Altura &&
        parseInt(elemento1.style.left)<=parseInt(elemento2.style.left)+elemento2Largura &&
        parseInt(elemento1.style.left)>=parseInt(elemento2.style.left) )||

        (parseInt(elemento1.style.top)+elemento1Altura>=parseInt(elemento2.style.top) &&
        parseInt(elemento1.style.top)+elemento1Altura<=parseInt(elemento2.style.top)+elemento2Altura &&
        parseInt(elemento1.style.left)+elemento1Largura<=parseInt(elemento2.style.left)+elemento2Largura &&
        parseInt(elemento1.style.left)+elemento1Largura>=parseInt(elemento2.style.left)))
}