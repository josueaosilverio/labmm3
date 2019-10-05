var certas = 0, erradas = 0;
var rNum = 0;
var erros = "";
var time = 0;
var sTime, eTime;

window.onload = function () {
    startGame();
};

function startGame() {
    sTime = new Date();

    novoNumero();

    window.onkeyup = function (event) {
        processaTecla(event);
    }
}

function novoNumero() {
    if (certas < 5) {
        rNum = Math.floor(Math.random() * 9);
        document.getElementById("content").innerHTML = rNum;
    }
    else
        fimJogo();
}

function processaTecla(evt) {
    var tecla = evt.key;
    if (tecla == rNum) {
        certas++;
        novoNumero();
        document.getElementById("teclapressionada").style.color = "green";
    } else {
        erradas++;
        erros += "Era um " + rNum + " e pressionou o " + tecla + ".<br />";
        document.getElementById("teclapressionada").style.color = "red";
    }
    document.getElementById("teclapressionada").style.display = "block";
    document.getElementById("teclapressionada").innerHTML = tecla;
    setTimeout("document.getElementById('teclapressionada').style.display = 'none';", 500);
}

function fimJogo() {
    window.onkeyup = null;
    eTime = new Date();
    time = eTime - sTime;
    time = time / 1000;

    if (time > 5)
        document.getElementById("header").innerHTML = "Resultado... lentinho :(";
    else
        document.getElementById("header").innerHTML = "Resultado... rapidinho :)";

    document.getElementById("content").innerHTML = "<div class='ink-button'><a href='index.html'>Voltar</a></div><br/>Demorou " + time + "s e cometeu " + erradas;
    if (erradas == 1)
        document.getElementById("content").innerHTML += " erro.<br />";
    else
        document.getElementById("content").innerHTML += " erros.<br />";

    document.getElementById("content").innerHTML += erros;
}
