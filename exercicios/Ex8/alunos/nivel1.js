var timerID;
var music = document.createElement("audio");
var win1 = 0, win2 = 0, win3 = 0;

window.onload = function () {
    carregaElementos();
};

function carregaElementos() {
    document.getElementById("start").onclick = function () {
        iniciarCorrida();
    };

    document.getElementById("atleta1Vitorias").value = 0;
    document.getElementById("atleta2Vitorias").value = 0;
    document.getElementById("atleta3Vitorias").value = 0;

}

function iniciarCorrida() {
    document.getElementById("start").onclick = null;

    document.getElementById("start").src = "imagens/start_locked.png";
    document.getElementById("atleta1").style.left = "10px";
    document.getElementById("atleta2").style.left = "10px";
    document.getElementById("atleta3").style.left = "10px";
    timerID = setInterval("moveAtletas()", 100);

    document.getElementById("atleta1").src = "imagens/atleta1.png";
    document.getElementById("atleta2").src = "imagens/atleta2.png";
    document.getElementById("atleta3").src = "imagens/atleta3.png";

    music.src = "sounds/music.mp3";
    music.play();

    window.onkeyup = function(event){
        processaTecla(event);
    };
}

function moveAtletas() {
    document.getElementById("atleta1").style.left = parseInt(document.getElementById("atleta1").style.left) + 6 + "px";
    document.getElementById("atleta3").style.left = parseInt(document.getElementById("atleta3").style.left) + 3 + "px";
    verificaFim();
}

function verificaFim() {
    if (parseInt(document.getElementById("atleta1").style.left) > 500) {
        clearInterval(timerID);
        document.getElementById("start").src = "imagens/start.png";
        document.getElementById("atleta1").src = "imagens/atleta1_win.png";
        win1++;
        document.getElementById("atleta1Vitorias").value = win1;
        document.getElementById("start").onclick = function(){
            iniciarCorrida();
        };
        music.src = "sounds/lost.mp3";
        music.play();
        window.onkeyup = null;
    }
    if (parseInt(document.getElementById("atleta2").style.left) > 500) {
        clearInterval(timerID);
        document.getElementById("start").src = "imagens/start.png";
        document.getElementById("atleta2").src = "imagens/atleta2_win.png";
        win2++;
        document.getElementById("atleta2Vitorias").value = win2;
        document.getElementById("start").onclick = function(){
            iniciarCorrida();
        };
        music.src = "sounds/winner.mp3";
        music.play();
        window.onkeyup = null;
    }
    if (parseInt(document.getElementById("atleta3").style.left) > 500) {
        clearInterval(timerID);
        document.getElementById("start").src = "imagens/start.png";
        document.getElementById("atleta3").src = "imagens/atleta3_win.png";
        win3++;
        document.getElementById("atleta3Vitorias").value = win3;
        document.getElementById("start").onclick = function(){
            iniciarCorrida();
        };
        music.src = "sounds/lost.mp3";
        music.play();
        window.onkeyup = null;
    }
}

function processaTecla(evt) {
    var tecla = evt.keyCode;
    if(tecla == 32)
        document.getElementById("atleta2").style.left = parseInt(document.getElementById("atleta2").style.left) + 6 + "px";

}