var arrayFilmesTitulo = ["Cidade dos Sonhos", "Amor à Flor da Pele", "Sangue Negro", "A Viagem de Chihiro", "Boyhood: Da Infância à Juventude", "Brilho Eterno de uma Mente Sem Lembranças", "A Árvore da Vida", "As Coisas Simples da Vida", "A Separação", "Onde os Fracos não Têm Vez"];
var arrayMeusFilmes = [];
var ii = 0;
var iii;
var del;
window.onload = carregaElementos;

function carregaElementos() {
    for (var i = 1; i <= 10; i++) {
        ii = i;
        iii = ii - 1;
        document.getElementById("divListaFilmes").innerHTML += "<img src='imagens/filme" + i + "_thumb.jpg' id='thumbfilme" + i + "'><br>";
        document.getElementById("thumbfilme" + i).style.position = "relative";
        document.getElementById("thumbfilme" + i).style.verticalAlign = "middle";
        document.getElementById("thumbfilme" + ii).setAttribute("onmouseover", "previewFilme(" + ii + ")");
        document.getElementById("thumbfilme" + ii).setAttribute("onmousedown", "adicionaFilme(" + iii + ")");
    }
    document.getElementById("imagemPreview").style.display = "none";
}

function previewFilme(idFilme) {
    this.addEventListener("mouseout", function () {
        document.getElementById("imagemPreview").style.display = "none";
    });
    document.getElementById("imagemPreview").style.display = "";
    document.getElementById("imagemPreview").src = "imagens/filme" + idFilme + ".jpg";
}

function adicionaFilme(idFilme) {
    del = false;
    for (var i = 0; i <= arrayMeusFilmes.length; i++) {
        if (arrayMeusFilmes[i] == arrayFilmesTitulo[idFilme]) {
            arrayMeusFilmes.splice(i, 1);
            del = true;
        }
    }
    if (arrayMeusFilmes.length < 5 && del == false) {
        arrayMeusFilmes.push(arrayFilmesTitulo[idFilme]);
    }
    del = false;
    document.getElementById("divMeuTop").innerHTML = "";
    for (var i = 0; i < arrayMeusFilmes.length; i++) {
        document.getElementById("divMeuTop").innerHTML += "<p>" + arrayMeusFilmes[i] + "</p>";
    }
}