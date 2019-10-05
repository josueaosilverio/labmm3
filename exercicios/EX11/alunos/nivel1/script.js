window.onload = carregaElementos;
var randbolean;
var randx;
var playing = false;
var contadorOvos = 0;
var ovoArray = [];
var tempojogo;
var varrelogio;
tempojogo = 30;
var bgm = new Audio;
bgm.src = "sons/tune.mp3";
var somEscadas = new Audio;
somEscadas.src = "sons/updown.mp3";
var somEgg = new Audio;
somEgg.src = "sons/egg.mp3";
var somAndar = new Audio;
somAndar.src = "sons/leftright.mp3";
var somWin = new Audio;
somWin.src = "sons/applause.mp3";

function carregaElementos() {
    document.getElementById("plataforma1").style.position = "absolute";
    document.getElementById("plataforma1").style.top = "150px";
    document.getElementById("plataforma2").style.position = "absolute";
    document.getElementById("plataforma2").style.top = "300px";
    for (var i = 0; i < 6; i++) {
        document.getElementById("main").innerHTML += "<img src='imagens/ovo.png' id='ovo" + i + "'>";
        document.getElementById("ovo" + i).style.position = "absolute";
    }
    document.getElementById("main").innerHTML += "<img src='imagens/jogador_direita.png' id='jogador'>";
    document.getElementById("jogador").style.position = "absolute";
    document.getElementById("btn_jogar").onclick = comecaJogar;
    document.body.onkeypress = function (e) {
        processaTecla(e);
    };
    document.body.onkeyup = function () {
        somEscadas.pause();
        somEgg.pause();
        somAndar.pause();
    }
}

function comecaJogar() {
    tempojogo = 30;
    document.getElementById("txt_tempo").innerHTML = "" + tempojogo;
    document.getElementById("title").innerHTML = "Chuckie Egg - 00:" + tempojogo;
    playing = true;
    document.getElementById("divAjuda").style.display = "none";
    for (var i = 0; i < 6; i++) {
        randbolean = parseInt(Math.random() * 2);
        console.log(randbolean);
        randx = Math.floor(Math.random() * 703);
        console.log(randx);
        if (randbolean == 0) {
            document.getElementById("ovo" + i).style.top = "137px";
        } else if (randbolean == 1) {
            document.getElementById("ovo" + i).style.top = "287px";
        }
        document.getElementById("ovo" + i).style.left = randx + "px";
        document.getElementById("ovo" + i).style.display = "";
    }
    document.getElementById("jogador").style.left = "50px";
    document.getElementById("jogador").style.top = "258px";
    varrelogio = setInterval(relogio, 1000);
    bgm.play();
}

function processaTecla(e, jogadorx, jogadory) {
    if (playing == true) {
        jogadorx = parseInt(document.getElementById("jogador").style.left);
        jogadory = parseInt(document.getElementById("jogador").style.top);
        //up
        if (e.keyCode == 119) {
            if (jogadorx >= 550 && jogadorx <= 585 && jogadory <= 258 && jogadory >= 117) {
                document.getElementById("jogador").src = "imagens/subir.png";
                document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) - 10 + "px";
                detetaColisao();
                somEscadas.play();
            }
        }
        //down
        if (e.keyCode == 115) {
            if (jogadorx >= 550 && jogadorx <= 585 && jogadory <= 248 && jogadory >= 107) {
                document.getElementById("jogador").src = "imagens/descer.png";
                document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) + 10 + "px";
                detetaColisao();
                somEscadas.play();
            }
        }
        //right
        if (e.keyCode == 100) {
            if (jogadorx >= 0 && jogadorx <= 708 && (jogadory == 108 || jogadory == 258)) {
                document.getElementById("jogador").src = "imagens/jogador_direita.png";
                document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) + 10 + "px";
                detetaColisao();
                console.log(document.getElementById("jogador").style.top);
                somAndar.play();
            }

        }
        //left
        if (e.keyCode == 97) {
            if (jogadorx >= 10 && jogadorx <= 718 && (jogadory == 108 || jogadory == 258)) {
                document.getElementById("jogador").src = "imagens/jogador_esquerda.png";
                document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) - 10 + "px";
                detetaColisao();
                somAndar.play();
            }

        }
        if (e.keyCode != 97 && e.keyCode != 119 && e.keyCode != 115 && e.keyCode != 100) {
            fimJogo();
        }
    }
}

function detetaColisao() {
    for (var i = 0; i < 6; i++) {
        if (parseInt(document.getElementById("jogador").style.left) >= parseInt(document.getElementById("ovo" + i).style.left) &&
            parseInt(document.getElementById("jogador").style.left) <= parseInt(document.getElementById("ovo" + i).style.left) + 28 &&
            parseInt(document.getElementById("jogador").style.top) + 42 >= parseInt(document.getElementById("ovo" + i).style.top) &&
            parseInt(document.getElementById("jogador").style.top) + 42 <= parseInt(document.getElementById("ovo" + i).style.top) + 44
        ) {
            document.getElementById("ovo" + i).style.display = "none";
            if (!ovoArray[i]) {
                contadorOvos++;
                somEgg.play();
            }
            ovoArray[i] = true;
            document.getElementById("txt_ovos").innerHTML = "" + contadorOvos + "";
        }
        if (contadorOvos == 6) {
            somWin.play();
            fimJogo();
        }
    }
}

function fimJogo() {
    document.getElementById("divAjuda").style.display = "";
    playing = false;
    contadorOvos = 0;
    for (var i = 0; i < 6; i++) {
        ovoArray[i] = false;
    }
    clearInterval(varrelogio);

}

function relogio() {
    tempojogo--;
    document.getElementById("txt_tempo").innerHTML = "" + tempojogo;
    document.getElementById("title").innerHTML = "Chuckie Egg - 00:" + tempojogo;
5
    if (tempojogo == 0) {
        fimJogo();
    }
}