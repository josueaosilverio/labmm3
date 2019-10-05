var timerID;
var music = document.createElement("audio");
var win1 = 0, win2 = 0, win3 = 0;
var player = 0;
var speed = 0;

window.onload = function () {
    document.getElementById("div_inicio").style.display = "block";

    document.getElementById("atleta1inicio").onclick = function () {
        console.log("1");
        document.getElementById("div_inicio").style.display = "none";
        player = 1;
        speed = 3;
        carregaElementos()
    };
    document.getElementById("atleta2inicio").onclick = function () {
        document.getElementById("div_inicio").style.display = "none";
        player = 2;
        speed = 6;
        carregaElementos()
    };
    document.getElementById("atleta3inicio").onclick = function () {
        document.getElementById("div_inicio").style.display = "none";
        player = 3;
        speed = 9;
        carregaElementos()
    };
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

    window.onkeyup = function (event) {
        processaTecla(event);
    };
}

function moveAtletas() {
    var speed1 = Math.floor(Math.random() * 6) + 1;
    var speed2 = Math.floor(Math.random() * 6) + 1;

    switch (player) {
        case 1:
            document.getElementById("atleta2").style.left = parseInt(document.getElementById("atleta2").style.left) + speed1 + "px";
            document.getElementById("atleta3").style.left = parseInt(document.getElementById("atleta3").style.left) + speed2 + "px";
            break;
        case 2:
            document.getElementById("atleta1").style.left = parseInt(document.getElementById("atleta1").style.left) + speed1 + "px";
            document.getElementById("atleta3").style.left = parseInt(document.getElementById("atleta3").style.left) + speed2 + "px";
            break;
        case 3:
            document.getElementById("atleta2").style.left = parseInt(document.getElementById("atleta2").style.left) + speed1 + "px";
            document.getElementById("atleta1").style.left = parseInt(document.getElementById("atleta1").style.left) + speed2 + "px";
            break;
    }

    verificaFim();
}

function verificaFim() {
    if (parseInt(document.getElementById("atleta1").style.left) > 500) {
        clearInterval(timerID);
        document.getElementById("start").src = "imagens/start.png";
        document.getElementById("atleta1").src = "imagens/atleta1_win.png";
        win1++;
        document.getElementById("atleta1Vitorias").value = win1;
        document.getElementById("start").onclick = function () {
            iniciarCorrida();
        };
        if (player == 1)
            music.src = "sounds/winner.mp3";
        else
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
        document.getElementById("start").onclick = function () {
            iniciarCorrida();
        };
        if (player == 2)
            music.src = "sounds/winner.mp3";
        else
            music.src = "sounds/lost.mp3";
        music.play();
        window.onkeyup = null;
    }
    if (parseInt(document.getElementById("atleta3").style.left) > 500) {
        clearInterval(timerID);
        document.getElementById("start").src = "imagens/start.png";
        document.getElementById("atleta3").src = "imagens/atleta3_win.png";
        win3++;
        document.getElementById("atleta3Vitorias").value = win3;
        document.getElementById("start").onclick = function () {
            iniciarCorrida();
        };
        if (player == 3)
            music.src = "sounds/winner.mp3";
        else
            music.src = "sounds/lost.mp3";
        music.play();
        window.onkeyup = null;
    }
}

function processaTecla(evt) {
    var tecla = evt.keyCode;
    var id = "atleta" + player;
    if (tecla == 32)
        document.getElementById(id).style.left = parseInt(document.getElementById(id).style.left) + 6 + "px";

}