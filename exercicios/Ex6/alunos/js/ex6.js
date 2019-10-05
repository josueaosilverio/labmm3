var credits = 100;
var n1 = 0, n2 = 0, n3 = 0;
var audio = new Audio();

window.onload = function () {
    iniciarScript();

};


function iniciarScript() {
    credits = 100;
    document.getElementById("slot1").setAttribute("src", "img/empty.png");
    document.getElementById("slot2").setAttribute("src", "img/empty.png");
    document.getElementById("slot3").setAttribute("src", "img/empty.png");

    document.getElementById("btn_jogar").style.display = "block";
    document.getElementById("btn_jogarAgain").style.display = "none";

    document.getElementById("valor").innerHTML = credits;
    document.getElementById("valorGanho").innerHTML = "";

    document.getElementById("btn_jogar").onclick = function () {
        jogar();
    }
}

function jogar() {
    n1 = Math.floor(Math.random() * 7) + 1;
    n2 = Math.floor(Math.random() * 7) + 1;
    n3 = Math.floor(Math.random() * 7) + 1;

    audio.src = "sounds/start.mp3";
    audio.play();

    document.getElementById("slot1").setAttribute("src", "img/img" + n1 + ".png");
    document.getElementById("slot2").setAttribute("src", "img/img" + n2 + ".png");
    document.getElementById("slot3").setAttribute("src", "img/img" + n3 + ".png");

    if ((n1 == 7 && n2 == 7 && n3 != 7) || (n1 != 7 && n2 == 7 && n3 == 7) || (n1 == 7 && n3 == 7 && n2 != 7)) {
        credits += 20;
        document.getElementById("valorGanho").innerHTML = "20";
    } else if (n1 == 7 && n2 == 7 && n3 == 7) {
        credits += 50;
        document.getElementById("valorGanho").innerHTML = "50";
    } else{
        credits -= 10;
        document.getElementById("valorGanho").innerHTML = "-10";
    }

    document.getElementById("valor").innerHTML = credits;

    if(credits == 0)
        gameOver();

}

function gameOver() {
    document.getElementById("btn_jogar").style.display = "none";
    document.getElementById("btn_jogarAgain").style.display = "block";

    document.getElementById("btn_jogarAgain").onclick = function () {
        iniciarScript();
    }
}