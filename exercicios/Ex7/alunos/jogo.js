var toup_tot = 0, toup_hit = 0;
var timerID, showTimer;
var showTime = 0;
var xPos = 0, yPos = 0;
var pop = document.createElement('audio');
var hit = document.createElement('audio');
var didHit = false;
pop.src = "sons/toupeira.mp3";
hit.src = "sons/boing.mp3";

window.onload = function () {
    document.getElementById("toupeira").style.display = "none";

    document.getElementById("divJogar").onmouseover = function () {
        document.getElementById("btnJogar").src = "imagens/botaoJogarOver.png";
    };
    document.getElementById("divJogar").onmouseout = function () {
        document.getElementById("btnJogar").src = "imagens/botaoJogar.png";
    };

    document.getElementById("btnJogar").onclick = function () {
        jogar();
    }
};

function jogar() {
    document.getElementById("divJogar").style.display = "none";
    toup_hit = 0;
    toup_tot = 0;
    timerID = setInterval("trocaPosicao()", 1000);
}

function trocaPosicao() {
    toup_tot++;
    didHit = false;
    clearTimeout(showTimer);
    if (toup_tot <= 10) {
        xPos = Math.floor(Math.random() * (window.innerWidth - 100));
        yPos = Math.floor(Math.random() * (window.innerHeight - 250)) + 150;
        showTime = Math.floor(Math.random() * 400) + 400;

        pop.play();

        document.getElementById("toupeira").style.display = "block";
        document.getElementById("toupeira").style.left = xPos + "px";
        document.getElementById("toupeira").style.top = yPos + "px";
        document.getElementById("toupeira").src = "imagens/mole.png";

        showTimer = setTimeout(function(){document.getElementById("toupeira").style.display = "none"}, showTime);


        document.getElementById("toupeira").onclick = function () {
            apanhou();
        }
        document.getElementById("valor").innerHTML = "Toupeiras saídas: " + toup_tot + "<br/>Toupeiras apanhadas: " + toup_hit;
    } else {
        document.getElementById("toupeira").src = "imagens/mole.png";
        gameOver();
    }
}

function apanhou() {
    if(!didHit) {
        toup_hit++;
        hit.play();
        document.getElementById("toupeira").src = "imagens/mole-dead.png";
        didHit = true;
    }
}

function gameOver() {
    clearInterval(timerID);
    document.getElementById("divJogar").style.display = "block";
    document.getElementById("toupeira").onclick = null;
}