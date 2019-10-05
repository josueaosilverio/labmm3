window.onload = carregaElementos;
var rand1;
var rand2;
var playing = false;
var facing = "left";
var lampacesa = 0;
var lamp = [];
var tempojogo;
var varrelogio;
tempojogo = 30;

function carregaElementos() {
    document.getElementById("main").innerHTML = "<p id='timer'>" + tempojogo + "</p>";
    for (var i = 0; i <= 9; i++) {
        document.getElementById("main").innerHTML += "<img src='imagens/lampada_0.png' alt='lampada' id='lampada" + i + "'>";
    }
    document.getElementById("main").innerHTML += "<img src='imagens/jogador_esquerda.png' alt='jogador' id='jogador'>";
    document.getElementById("jogar_btn").onclick = jogar;
    document.body.onkeypress = function (e) {
        processaTecla(e);
    }
}

function jogar() {
    tempojogo = 30;
    document.getElementById("timer").innerHTML = tempojogo;
    document.getElementById("divAjuda").style.display = "none";
    for (var ii = 0; ii <= 9; ii++) {
        rand1 = Math.ceil(Math.random() * (innerHeight - 104));
        rand2 = Math.ceil(Math.random() * (innerWidth - 28));
        document.getElementById("lampada" + ii).style.position = "absolute";
        document.getElementById("lampada" + ii).style.top = rand1 + "px";
        document.getElementById("lampada" + ii).style.left = rand2 + "px";
        document.getElementById("lampada" + ii).src = "imagens/lampada_0.png";
    }
    rand1 = Math.ceil(Math.random() * (innerHeight - 151));
    rand2 = Math.ceil(Math.random() * (innerWidth - 91));
    document.getElementById("jogador").style.position = "absolute";
    document.getElementById("jogador").style.top = rand1 + "px";
    document.getElementById("jogador").style.left = rand2 + "px";
    playing = true;
    varrelogio = setInterval(relogio, 1000);
}

function processaTecla(e) {
    if (playing == true) {
        if (e.keyCode == 119) {
            document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) - 10 + "px";
            detetaColisao();
            if (parseInt(document.getElementById("jogador").style.top) <= 0) {
                document.getElementById("jogador").style.top = (innerHeight - 151) + "px";
            }
        }
        if (e.keyCode == 115) {
            document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) + 10 + "px";
            detetaColisao();
            if (parseInt(document.getElementById("jogador").style.top) >= innerHeight - 151) {
                document.getElementById("jogador").style.top = 0 + "px";
            }
        }
        if (e.keyCode == 100) {
            document.getElementById("jogador").src = "imagens/jogador_direita.png";
            facing = "right";
            document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) + 10 + "px";
            detetaColisao();
            if (parseInt(document.getElementById("jogador").style.left) >= innerWidth - 91) {
                document.getElementById("jogador").style.left = 0 + "px";
            }
        }
        if (e.keyCode == 97) {
            document.getElementById("jogador").src = "imagens/jogador_esquerda.png";
            facing = "left";
            document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) - 10 + "px";
            detetaColisao();
            if (parseInt(document.getElementById("jogador").style.left) <= 0) {
                document.getElementById("jogador").style.left = innerWidth - 91 + "px";
            }
        }
        if (e.keyCode != 97 && e.keyCode != 119 && e.keyCode != 115 && e.keyCode != 100) {
            clearInterval(varrelogio);
            document.getElementById("divAjuda").style.display = "";
            playing = false;
            document.getElementById("acesas").innerHTML = "" + lampacesa + "";
            document.getElementById("apagadas").innerHTML = "" + 10 - lampacesa + "";
            lampacesa = 0;
            for (var iii = 0; iii <= 9; iii++) {
                lamp[iii] = false;
            }
        }
    }

}

function detetaColisao() {
    for (var iii = 0; iii <= 9; iii++) {
        if (facing == "left") {
            if (parseInt(document.getElementById("jogador").style.left) >= parseInt(document.getElementById("lampada" + iii).style.left) &&
                parseInt(document.getElementById("jogador").style.left) <= parseInt(document.getElementById("lampada" + iii).style.left) + 28 &&
                parseInt(document.getElementById("jogador").style.top) + 60 >= parseInt(document.getElementById("lampada" + iii).style.top) &&
                parseInt(document.getElementById("jogador").style.top) + 60 <= parseInt(document.getElementById("lampada" + iii).style.top) + 44
            ) {
                document.getElementById("lampada" + iii).src = "imagens/lampada_1.png";
                if (!lamp[iii]) {
                    lampacesa++;
                }
                lamp[iii] = true;

            }
        } else if (facing == "right") {
            if (parseInt(document.getElementById("jogador").style.left) + 91 >= parseInt(document.getElementById("lampada" + iii).style.left) &&
                parseInt(document.getElementById("jogador").style.left) + 91 <= parseInt(document.getElementById("lampada" + iii).style.left) + 28 &&
                parseInt(document.getElementById("jogador").style.top) + 60 >= parseInt(document.getElementById("lampada" + iii).style.top) &&
                parseInt(document.getElementById("jogador").style.top) + 60 <= parseInt(document.getElementById("lampada" + iii).style.top) + 44
            ) {
                document.getElementById("lampada" + iii).src = "imagens/lampada_1.png";
                if (!lamp[iii]) {
                    lampacesa++;
                }
                lamp[iii] = true;
            }
        }

    }
    if (lampacesa == 10) {
        document.getElementById("divAjuda").style.display = "";
        playing = false;
        document.getElementById("acesas").innerHTML = "" + lampacesa + "";
        document.getElementById("apagadas").innerHTML = "" + 10 - lampacesa + "";
        lampacesa = 0;
        for (var iii = 0; iii <= 9; iii++) {
            lamp[iii] = false;
        }
        clearInterval(varrelogio);
    }
}

function relogio() {
    tempojogo--;
    document.getElementById("timer").innerHTML = tempojogo;
    if (tempojogo == 20) {
        document.getElementById("timer").style.color = "yellow";
    }
    if (tempojogo == 10) {
        document.getElementById("timer").style.color = "red";
    }
    if (tempojogo == 0) {
        clearInterval(varrelogio);
        document.getElementById("divAjuda").style.display = "";
        playing = false;
        document.getElementById("acesas").innerHTML = "" + lampacesa + "";
        document.getElementById("apagadas").innerHTML = "" + 10 - lampacesa + "";
        lampacesa = 0;
        for (var iii = 0; iii <= 9; iii++) {
            lamp[iii] = false;
        }
    }
}