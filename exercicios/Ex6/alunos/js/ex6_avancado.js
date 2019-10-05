var credits = 100;
var n1 = 0, n2 = 0, n3 = 0;
var audio = new Audio();
var timerID;
var timer = 0;

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
    timer = 0;
    n1 = Math.floor(Math.random() * 7) + 1;
    n2 = Math.floor(Math.random() * 7) + 1;
    n3 = Math.floor(Math.random() * 7) + 1;

    audio.src = "sounds/start.mp3";
    audio.play();

    document.getElementById("btn_jogar").style.display = "none";

    timerID = setInterval("spin()", 1000);

}

function spin() {
    timer++;
    if (timer == 1)
        document.getElementById("slot1").setAttribute("src", "img/img" + n1 + ".png");
    else if (timer == 2)
        document.getElementById("slot2").setAttribute("src", "img/img" + n2 + ".png");
    else if (timer == 3) {
        document.getElementById("slot3").setAttribute("src", "img/img" + n3 + ".png");
        document.getElementById("btn_jogar").style.display = "block";

        clearInterval(timerID);

        if ((n1 == n2 && n1 != n3 && n2 != n3) || (n2 == n3 && n1 != n2 && n1 != n3) || (n1 == n3 && n1 != n2 && n3 != n2)) {
            credits += 20;
            if ((n1 == 7 && n2 == 7 && n3 != 7) || (n1 != 7 && n2 == 7 && n3 == 7) || (n1 == 7 && n3 == 7 && n2 != 7)) {
                credits += 20;
                document.getElementById("valorGanho").innerHTML = "40";
            } else document.getElementById("valorGanho").innerHTML = "20";
            audio.src = "sounds/coins.mp3";
            audio.play();
        } else if (n1 == n2 && n2 == n3) {
            credits += 50;
            if (n1 == 7 && n2 == 7 && n3 == 7) {
                credits += 50;
                document.getElementById("valorGanho").innerHTML = "100";
            } else document.getElementById("valorGanho").innerHTML = "50";
            audio.src = "sounds/winner.mp3";
            audio.play();
        } else {
            credits -= 10;
            document.getElementById("valorGanho").innerHTML = "-10";
            audio.src = "sounds/lost.mp3";
            audio.play();
        }

        document.getElementById("valor").innerHTML = credits;

        if (credits == 0)
            gameOver();

    }
}

function gameOver() {
    document.getElementById("btn_jogar").style.display = "none";
    document.getElementById("btn_jogarAgain").style.display = "block";

    document.getElementById("btn_jogarAgain").onclick = function () {
        iniciarScript();
    }
}