var meuArray = [];

window.onload = function () {
    document.getElementById("inicio_btn").onclick = inserirElementoInicio;
    document.getElementById("fim_btn").onclick = inserirElementoFim;
    document.getElementById("modifica_btn").onclick = modificarElemento;
    document.getElementById("eliminar_btn").onclick = eliminarElemento;
    document.getElementById("ordenar_btn").onclick = ordenarArray;
    document.getElementById("limpar_btn").onclick = limparArray;
};

function actualizaLista() {
    document.getElementById("meuArrayTamanho").value = meuArray.length;
    document.getElementById("meuArrayTxt").innerHTML = "";
    for (var i = 0; i < meuArray.length; i++) {
        document.getElementById("meuArrayTxt").innerHTML += meuArray[i] + "<br>";
    }
}

function inserirElementoInicio() {
    meuArray.unshift(document.getElementById("inicio_txt").value);
    actualizaLista();
}

function inserirElementoFim() {
    meuArray.push(document.getElementById("fim_txt").value);
    actualizaLista();
}

function modificarElemento() {
    meuArray[document.getElementById("posicao_txt").value] = document.getElementById("valor_txt").value;
    actualizaLista();
}

function eliminarElemento() {
    meuArray.splice(document.getElementById("eliminar_txt").value, 1);
    actualizaLista();
}

function ordenarArray() {
    meuArray.sort();
    meuArray.sort(function (a, b) {
        return a - b
    });
    actualizaLista();
}

function limparArray() {
    meuArray.splice(0);
    actualizaLista();
}