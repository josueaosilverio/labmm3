var des;

window.onload = function () {
    aminNumeros();
};

function aminNumeros() {
    for (var i = 0; i < 10; i++)
        document.getElementById("n" + i).style.left = Math.floor(Math.random() * (-449)) - 50 + "px";

    des = Math.floor(Math.random() * 30) + 10;

    timerID = setInterval("movNum()", 50);
}

function movNum() {
    if (parseInt(document.getElementById("n0").style.left) < 700)
        document.getElementById("n0").style.left = parseInt(document.getElementById("n0").style.left) + des + "px";
    else
        document.getElementById("n0").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n1").style.left) < 700)
        document.getElementById("n1").style.left = parseInt(document.getElementById("n1").style.left) + des + "px";
    else
        document.getElementById("n1").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n2").style.left) < 700)
        document.getElementById("n2").style.left = parseInt(document.getElementById("n2").style.left) + des + "px";
    else
        document.getElementById("n2").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n3").style.left) < 700)
        document.getElementById("n3").style.left = parseInt(document.getElementById("n3").style.left) + des + "px";
    else
        document.getElementById("n3").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n4").style.left) < 700)
        document.getElementById("n4").style.left = parseInt(document.getElementById("n4").style.left) + des + "px";
    else
        document.getElementById("n4").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n5").style.left) < 700)
        document.getElementById("n5").style.left = parseInt(document.getElementById("n5").style.left) + des + "px";
    else
        document.getElementById("n5").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n6").style.left) < 700)
        document.getElementById("n6").style.left = parseInt(document.getElementById("n6").style.left) + des + "px";
    else
        document.getElementById("n6").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n7").style.left) < 700)
        document.getElementById("n7").style.left = parseInt(document.getElementById("n7").style.left) + des + "px";
    else
        document.getElementById("n7").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n8").style.left) < 700)
        document.getElementById("n8").style.left = parseInt(document.getElementById("n8").style.left) + des + "px";
    else
        document.getElementById("n8").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
    if (parseInt(document.getElementById("n9").style.left) < 700)
        document.getElementById("n9").style.left = parseInt(document.getElementById("n9").style.left) + des + "px";
    else
        document.getElementById("n9").style.left = Math.floor(Math.random() * (-449)) - 50 + "px";
}