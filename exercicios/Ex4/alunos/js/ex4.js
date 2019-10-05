//Invocar função de preparação de jogo após carregamento da página
window.onload = function () {

//declarar variaveis globais
    var op = "-+*/";
    var n1, n2, n3, op1, op2, res, input = 0;
    var certas = 0;
    var erradas = 0;
    var exp = "";


//Implementar função - preparar

    //invocar função sempre que o utilizador pressione um botão

    //limpar o numero de respostas certas e erradas
    document.getElementById("resultado").value = "";
    document.getElementById("certas").innerHTML = "Respostas certas: 0";
    document.getElementById("erradas").innerHTML = "Respostas erradas: 0";

    document.getElementById("btn_jogar").onclick = function () {
        document.getElementById("entrada").style.display = "none";
        document.getElementById("jogo").style.display = "";

        n1 = Math.floor(Math.random() * 10);
        n2 = Math.floor(Math.random() * 10);
        n3 = Math.floor(Math.random() * 10);

        op1 = Math.floor(Math.random() * 4);
        op2 = Math.floor(Math.random() * 4);

        while (n2 == 0 && op1 == 3)
            op1 = Math.floor(Math.random() * 4);
        while (n3 == 0 && op2 == 3)
            op2 = Math.floor(Math.random() * 4);

        switch (op1) {
            case 0:
                op1 = "+";
                break;
            case 1:
                op1 = "-";
                break;
            case 2:
                op1 = "*";
                break;
            case 3:
                op1 = "/";
                break;
        }
        switch (op2) {
            case 0:
                op2 = "+";
                break;
            case 1:
                op2 = "-";
                break;
            case 2:
                op2 = "*";
                break;
            case 3:
                op2 = "/";
                break;
        }
        //fim metodo 2

        exp = n1 + op1 + n2 + op2 + n3 + " = ?";
        document.getElementById("expressao").innerHTML = exp;
        console.log(exp);
        if (op2 == "*" && (op1 == "+" || op1 == "-")) {
            res = n2 * n3;
            switch (op1) {
                case "+":
                    res += n1;
                    break;
                case "-":
                    res -= n1;
                    break;
            }
        }
        else if (op2 == "/" && (op1 == "+" || op1 == "-")) {
            res = n2 / n3;
            switch (op1) {
                case "+":
                    res += n1;
                    break;
                case "-":
                    res -= n1;
                    break;
            }
        }
        else {
            switch (op1) {
                case "+":
                    res = n1 + n2;
                    break;
                case "-":
                    res = n1 - n2;
                    break;
                case "*":
                    res = n1 * n2;
                    break;
                case "/":
                    res = n1 / n2;
                    break;
            }
            switch (op2) {
                case "+":
                    res += n3;
                    break;
                case "-":
                    res -= n3;
                    break;
                case "*":
                    res *= n3;
                    break;
                case "/":
                    res /= n3;
                    break;
            }
        }
        console.log(Math.floor(res));
    };

    document.getElementById("btn_verificar").onclick = function () {
        input = document.getElementById("resultado").value;

        if (!isNaN(input)) {
            document.getElementById("entrada").style.display = "";
            document.getElementById("jogo").style.display = "none";
            if (parseInt(document.getElementById("resultado").value) == Math.floor(res)) {
                certas++;
                document.getElementById("certas").innerHTML = "Respostas certas: " + certas;
            } else {
                erradas++;
                document.getElementById("erradas").innerHTML = "Respostas erradas: " + erradas;
            }
            document.getElementById("resultado").value = "";
        } else
            alert("Use apenas números");
    };
};