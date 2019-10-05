window.onload = function () {
    CarregaElementos();
}


function CarregaElementos() {

    document.getElementById("validar").onclick = validar;

    document.getElementById("validarInteiro").onclick = verificarInteiro;

    document.getElementById("validarInteiroPositivo").onclick = verificarInteiroP;

    document.getElementById('verificarinteiropositivopar').onclick = verificarintpospar;

    document.getElementById("calcularfatorialinteiropositivo").onclick = calcularfatorial;

    document.getElementById("verificapertencaaintervalo").onclick = pertençaintervalo;

    document.getElementById("verificaseemultiplo").onclick = multiplo;

    document.getElementById("verificarinteiropositivoprimo").onclick = primo;
}

function validar() {

    var num = document.getElementById("txtBox1").value;

    if (isNaN(num)) {
        document.getElementById("msg_num").innerHTML = "Não é um número";
    }
    else {
        document.getElementById("msg_num").innerHTML = "É um número";
    }
}

function verificarInteiro() {

    var numInt = document.getElementById("txtBox2").value;

    if (isNaN(numInt)) {
        document.getElementById("msg_int").innerHTML = "Não é um número";
    }
    else {
        if (numInt % 1 != 0) {
            document.getElementById("msg_int").innerHTML = "Não é um número inteiro";
        }
        else {
            document.getElementById("msg_int").innerHTML = "É um número inteiro";
        }
    }
}

function verificarInteiroP() {

    var numIntPos = document.getElementById("txtBox3").value;

    if (isNaN(numIntPos)) {
        document.getElementById("msg_int_pos").innerHTML = "Não é um número";
    }
    else {
        if (numIntPos < 0) {
            document.getElementById("msg_int_pos").innerHTML = "Não é um número inteiro positivo";
        }
        else {
            document.getElementById("msg_int_pos").innerHTML = "É um número inteiro positivo";
        }
    }
}

function verificarintpospar() {

    var numIntPosPar = document.getElementById("txtBox4").value;

    if (isNaN(numIntPosPar)) {
        document.getElementById("msg_int_pos_par").innerHTML = "Não é um número";
    }
    else {
        if (numIntPosPar < 0) {
            document.getElementById("msg_int_pos_par").innerHTML = "Não é um número inteiro positivo par";
        }
        else {
            if (numIntPosPar % 2 == 0) {
                document.getElementById("msg_int_pos_par").innerHTML = "É um número inteiro positivo par";
            }
            else {
                document.getElementById("msg_int_pos_par").innerHTML = "Não é um número inteiro positivo par";
            }
        }
    }
}

function calcularfatorial() {
    var i = 1;
    var fatorial = 1;
    var n = document.getElementById("txtBox5").value;

    while (i <= n) {
        fatorial = fatorial * i;
        i++;
    }
    document.getElementById("msg_fatorial").innerHTML = "O fatorial de " + n + " é " + fatorial;
}

function pertençaintervalo() {

    var num1 = document.getElementById("txtBox7").value;
    var num2 = document.getElementById("txtBox8").value;
    var num3 = document.getElementById("txtBox9").value;

    if (isNaN(num3)) {
        document.getElementById("msg_pertence").innerHTML = "Não é um número";
    }
    else {
        if (num3 > num1 && num3 < num2 || num3 < num1 && num3 > num2) {
            document.getElementById("msg_pertence").innerHTML = "Pertence ao intervalo";
        }
        else {
            document.getElementById("msg_pertence").innerHTML = "Não pertence ao intervalo";
        }
    }
}

function multiplo() {

    var num1 = document.getElementById("txtBox10").value;
    var num2 = document.getElementById("txtBox11").value;

    if (num1 % num2 == 0 || num2 % num1 == 0)
        document.getElementById("msg_mul").innerHTML = "São múltiplos";
    else
        document.getElementById("msg_mul").innerHTML = "Não são múltiplos";


    /*/*if (isNaN(num1) || isNaN(num2)){
     document.getElementById("msg_mul").innerHTML="Não são números";
     }
     else {
     if (num1%num2 !=0){
     document.getElementById("msg_mul").innerHTML = "Não são múltiplos";
     }
     else {
     if (num1 % num2 == 0) {
     if (num2 % num1 == 0)
     document.getElementById("msg_mul").innerHTML = "São múltiplos";
     }
     }
     }*/

}

function primo() {

    var numprimo = parseInt(document.getElementById("txtBox12").value);

    switch (numprimo) {
        case 1:
            document.getElementById("msg_primo").innerHTML = "São primos";
            break;
        case 2:
            document.getElementById("msg_primo").innerHTML = "São primos";
            break;
        case 3:
            document.getElementById("msg_primo").innerHTML = "São primos";
            break;
        case 5:
            document.getElementById("msg_primo").innerHTML = "São primos";
            break;
        case 7:
            document.getElementById("msg_primo").innerHTML = "São primos";
            break;
        default:
            for (var i = 1; i <= 9; i++) {
                if (numprimo / i == parseInt(numprimo / i)) {
                    document.getElementById("msg_primo").innerHTML = "Não são primos";
                    break;
                }
                else {
                    document.getElementById("msg_primo").innerHTML = "São primos";
                    alert("fgh");
                }
            }
    }
}