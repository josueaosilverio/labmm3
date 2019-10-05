var num = 0;
var name = "";
var tentativas = 0;

window.onload = function () {
    document.getElementById("nome").value = "";
    document.getElementById("nome").focus();
    document.getElementById("div_inicio").onclick = function () {
        jogar();
    }
}

function jogar() {
    if (document.getElementById("nome").value != "") {
        num = parseInt(Math.random() * 100) + 1;
        console.log(num);
        name = document.getElementById("nome").value;
        document.getElementById("div_inicio").style.display = "none";
        document.getElementById("msgtitulo").innerHTML = "";
        document.getElementById("msgresultado").innerHTML = "";
        document.getElementById("apostar").onclick = function () {
            adivinhaNumero();
        };
    } else
        document.getElementById("mensagem_erro").innerHTML = "Nome inválido";
}


function reiniciaJogo() {
    tentativas = 0;
    num = parseInt(Math.random() * 100) + 1;
    document.getElementById("msgtitulo").innerHTML = "";
    document.getElementById("msgresultado").innerHTML = "";
    document.getElementById("apostar").innerHTML = "Apostar!";
    document.getElementById("numero").value = "";
    jogar();
}

function adivinhaNumero() {
    var aposta = document.getElementById("numero").value;
    if (tentativas != 4) {
        if (!isNaN(aposta)) {
            aposta = parseInt(aposta);
            if (aposta >= 1 && aposta <= 100) {
                if (aposta < num) {
                    tentativas++;
                    document.getElementById("msgtitulo").innerHTML = "Erraste!";
                    document.getElementById("msgresultado").innerHTML = "O número introduzido é <strong>pequeno</strong> de mais! Tenta de novo...<br />Tentativas: " + tentativas;
                } else if (aposta > num) {
                    tentativas++;
                    document.getElementById("msgtitulo").innerHTML = "Erraste!";
                    document.getElementById("msgresultado").innerHTML = "O número introduzido é <strong>grande</strong> de mais! Tenta de novo...<br />Tentativas: " + tentativas;
                } else {
                    tentativas++;
                    document.getElementById("msgtitulo").innerHTML = "Acertaste!";
                    document.getElementById("msgresultado").innerHTML = "Parabéns " + name + "! <br />Acertaste ao fim de " + tentativas + " tentativas";
                    document.getElementById("apostar").innerHTML = "Reiniciar";
                    document.getElementById("apostar").onclick = function () {
                        reiniciaJogo();
                    }
                }
            } else {
                document.getElementById("msgtitulo").innerHTML = "Erro";
                document.getElementById("msgresultado").innerHTML = "Número inválido";
            }
        } else {
            document.getElementById("msgtitulo").innerHTML = "Erro";
            document.getElementById("msgresultado").innerHTML = "Não é um número";
        }
    } else {
        document.getElementById("msgtitulo").innerHTML = "Perdeste";
        document.getElementById("msgresultado").innerHTML = "Número máximo de tentativas alcançado";
        document.getElementById("apostar").innerHTML = "Reiniciar";
        document.getElementById("apostar").onclick = function () {
            reiniciaJogo();
        }
    }
}

