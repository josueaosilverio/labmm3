var tileSet = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
var diamantestotais=0;

window.onload = iniciar;
window.onkeydown = function (event) {
    processaTecla(event);
};

window.onkeyup = function () {
    document.getElementById("jogador").src = "imgs/player_" + facing + ".png";
};
var facing = "";
var diamantes = 0;

function iniciar() {
    document.getElementById("score").style.display = "none";
    document.getElementById("splash").onclick = function () {
        startGame();
    }
}

function startGame() {
    document.getElementById("splash").style.display = "none";
    document.getElementById("score").style.display = "block";
    construirMapa();
}

function construirMapa() {
    for (var i = 0; i < tileSet.length; i++) {
        for (var ii = 0; ii < tileSet[i].length; ii++) {
            var randn = Math.floor(Math.random() * 101);
            if (randn >= 0 && randn <= 70) {
                tileSet[i][ii] = 1;
            } else if (randn >= 71 && randn <= 97) {
                tileSet[i][ii] = 0;
            } else if (randn >= 98 && randn <= 100) {
                tileSet[i][ii] = 2;
                diamantestotais++;
            }
            switch (tileSet[i][ii]) {
                case 1:
                    document.getElementById("tiles").innerHTML += "<img src='imgs/earth-tile.png' id='tile" + i + "_" + ii + "'>";
                    document.getElementById("tile" + i + "_" + ii).style.top = i * 50 + "px";
                    document.getElementById("tile" + i + "_" + ii).style.left = ii * 50 + "px";
                    document.getElementById("tile" + i + "_" + ii).style.position = "absolute";
                    break;
                case 0:
                    document.getElementById("tiles").innerHTML += "<img src='imgs/rock-tile.png' id='tile" + i + "_" + ii + "'>";
                    document.getElementById("tile" + i + "_" + ii).style.top = i * 50 + "px";
                    document.getElementById("tile" + i + "_" + ii).style.left = ii * 50 + "px";
                    document.getElementById("tile" + i + "_" + ii).style.position = "absolute";
                    break;
                case 2:
                    document.getElementById("tiles").innerHTML += "<img src='imgs/diamond.png' id='tile" + i + "_" + ii + "'>";
                    document.getElementById("tile" + i + "_" + ii).style.top = i * 50 + "px";
                    document.getElementById("tile" + i + "_" + ii).style.left = ii * 50 + "px";
                    document.getElementById("tile" + i + "_" + ii).style.position = "absolute";
                    break;
            }
        }
    }
    document.getElementById("tiles").innerHTML += "<img src='imgs/player_right.png' id='jogador'>";
    document.getElementById("jogador").style.top = "-50px";
    document.getElementById("jogador").style.left = "0px";
    document.getElementById("jogador").style.position = "absolute";
}


function processaTecla(evt) {
    var jogadorx = parseInt(document.getElementById("jogador").style.left);
    var jogadory = parseInt(document.getElementById("jogador").style.top);
    var posTop;
    var posLeft;
    var fundo = parseInt(tileSet.length) * 50;
    var direita = parseInt(tileSet[0].length) * 50 - 50;
    switch (evt.keyCode) {
        case 38:
            if (facing != "up") {
                document.getElementById("jogador").src = "imgs/anim_up.gif";
                facing = "up";
            }
            if (jogadory > 0) {
                posTop = jogadory - 50;
                posLeft = jogadorx;
                detetaColisao(posLeft, posTop);
            }
            break;
        case 40:
            if (facing != "down") {
                document.getElementById("jogador").src = "imgs/anim_down.gif";
                facing = "down";
            }
            if (jogadory + 50 < fundo) {
                posTop = jogadory + 50;
                posLeft = jogadorx;
                detetaColisao(posLeft, posTop);
            }
            break;
        case 37:
            if (facing != "left") {
                document.getElementById("jogador").src = "imgs/anim_left.gif";
                facing = "left";
            }
            if (jogadorx > 0) {
                posTop = jogadory;
                posLeft = jogadorx - 50;
                detetaColisao(posLeft, posTop);
            }
            break;
        case 39:
            if (facing != "right") {
                document.getElementById("jogador").src = "imgs/anim_right.gif";
                facing = "right";
            }
            if (jogadorx < direita) {
                posTop = jogadory;
                posLeft = jogadorx + 50;
                detetaColisao(posLeft, posTop);
            }
            break;
        case 82:
            location.reload();
            break;
        default:
    }

}

function detetaColisao(posLeft, posTop) {
    for (var i = 0; i < tileSet.length; i++) {
        for (var ii = 0; ii < tileSet[i].length; ii++) {
            if (parseInt(document.getElementById("tile" + i + "_" + ii).style.top) == posTop &&
                parseInt(document.getElementById("tile" + i + "_" + ii).style.left) == posLeft) {
                switch (tileSet[i][ii]) {
                    case 0:
                        tileSet[i][ii] = 3;
                        document.getElementById("tile" + i + "_" + ii).src = "imgs/break-tile.png";
                        break;
                    case 1:
                        document.getElementById("jogador").style.top = posTop;
                        document.getElementById("jogador").style.left = posLeft;
                        document.getElementById("tile" + i + "_" + ii).style.visibility = "hidden";
                        break;
                    case 2:
                        document.getElementById("jogador").style.top = posTop;
                        document.getElementById("jogador").style.left = posLeft;
                        document.getElementById("tile" + i + "_" + ii).style.visibility = "hidden";
                        diamantes++;
                        tileSet[i][ii] = 1;
                        document.getElementById("diamantes").value = diamantes;
                        if (diamantes==diamantestotais){
                            location.reload();
                        }
                        break;
                    case 3:
                        document.getElementById("jogador").style.top = posTop;
                        document.getElementById("jogador").style.left = posLeft;
                        document.getElementById("tile" + i + "_" + ii).style.visibility = "hidden";
                        break;
                }
            }
        }
    }
}