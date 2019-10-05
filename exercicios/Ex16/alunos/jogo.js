var casco = 100;
var velocidade = 10;
var numNaves = 0;
var playing = 1;
var tempojogo = 15;
var varrelogio;
var pontuacao;
var interatualiza;

window.onload = carregaElementos;

function carregaElementos() {
    document.getElementById("fimJogo").style.display = "none";
    for (var i = 1; i < 4; i++) {
        document.getElementById("inimiga" + i).style.top = "-70px"
    }
    document.getElementById("tiro").style.top = "-70px"
    document.getElementById("cascoSpan").innerHTML = "" + casco;
    document.getElementById("navesSpan").innerHTML = "" + numNaves;
    document.getElementById("nave").style.top = "660px"
    document.getElementById("nave").style.left = "295px"
    iniciarMotorJogo();
    varrelogio = setInterval(relogio, 1000);
    document.getElementById("tempoSpan").innerHTML = "" + tempojogo;
    document.body.onkeydown = function (e) {
        processaTecla(e);
    }
}

function iniciarMotorJogo() {
    //interatualiza = setInterval("requestAnimationFrame(atualizaJogo)", 1000 / 60);
}

function relogio() {
    tempojogo--;
    document.getElementById("tempoSpan").innerHTML = "" + tempojogo;
    if (tempojogo == 10) {
        document.getElementById("tempoSpan").style.color = "red";
    }
    if (tempojogo == 0) {
        fimJogo();
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
    //Calcula a distância entre a nave e o fundo
    var bottom=700-parseInt(document.getElementById("nave").style.top);

    //cima
    if (direcao == 38 && naveY > window.innerHeight - 200) {
        document.getElementById("nave").style.top = parseInt(document.getElementById("nave").style.top) - velocidade + "px";
        //Incrementa à velocidade 10% da distância do fundo
        velocidade = velocidade + (bottom*0.1);
    }
    //baixo
    if (direcao == 40 && naveY < window.innerHeight - 40) {
        document.getElementById("nave").style.top = parseInt(document.getElementById("nave").style.top) + velocidade + "px";
        //Decrementa(?) à velocidade 10% da distância do fundo
        velocidade = velocidade - (bottom*0.1);
    }
    //direita
    if (direcao == 39 && naveX < window.innerWidth - 140) {
        document.getElementById("nave").style.left = parseInt(document.getElementById("nave").style.left) + velocidade + "px";
    }
    //esquerda
    if (direcao == 37 && naveX > 15) {
        document.getElementById("nave").style.left = parseInt(document.getElementById("nave").style.left) - velocidade + "px";
    }
}