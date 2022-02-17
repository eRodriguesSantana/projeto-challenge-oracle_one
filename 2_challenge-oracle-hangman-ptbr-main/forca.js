var palavras = ["brinquedo", "bicicleta", "carro", "televisao", "dinheiro", "shopping", "brincadeira"];
var palavra;
var input;
var novoInput;
var inputLetra;
var num;
var numer;
var tmp;
var posicao;
var s;
var c;
var g;
var cont;
var controle;
var evt = true;

window.addEventListener("load", inicia);

function inicia() {
    posicao = [];
    cont = 0;
    controle = false;
    s = 0;
    c = 0;
    g = 0;
    for (i = 1; i <= 6; i++) {
        document.getElementById("d" + i).style.display = "none";
    }
    gerarPalavra();
    for (i = 0; i < palavra.length; i++) {
        novoInput = criarInput(i);
        document.getElementById("jogo").appendChild(novoInput);
    }
    document.getElementById("btn").addEventListener("click", reiniciar);
    if (evt) {
        document.getElementById("jog").addEventListener("keyup", function () {
            document.getElementById("nav").innerHTML = "";
            verificar(this);
        });
        evt = false;
    }
}

//para verificar se e uma letra que foi digita
function verificar(input) {
    if (input.value.match(/[a-z]/)) {
        verificarLetra(input);
    } else {
        document.getElementById("nav").innerHTML = "Somente letras";
        input.value = "";
        return false;
    }
}

// verifica se a palavra tem a letra digitada
function verificarLetra(input) {
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] == input.value) {
            posicao[s] = i;
            s++;
            controle = true;
        }
    }
    insereLetra(input);
    tmp = setTimeout(function () { input.value = ""; }, 200);
}

//adiciona a letra na posiçao 
function insereLetra(input) {
    letraRep(input);
    if (!controle) {
        cont++;
        document.getElementById("jogadas").value += " " + input.value;
        document.getElementById("d" + cont).style.display = "block";
        if (cont >= 6) {
            document.getElementById("jog").setAttribute("disabled", "disabled");
            document.getElementById("nav").innerHTML = "PERDEU";
            document.getElementById("nav").style.color = "#f00";
        }
    } else {
        inputLetra = document.getElementsByClassName("letra").length;
        for (i = 0; i < inputLetra; i++) {
            if (i == posicao[c]) {
                document.getElementById("letra" + i).value = input.value;
                c++;
                g++;
                controle = false;
            }
        }
        if (g == palavra.length) {
            document.getElementById("nav").innerHTML = "GANHOU";
            document.getElementById("nav").style.color = "#00f";
            document.getElementById("jog").setAttribute("disabled", "disabled");
        }
    }
}

//verifica se a letra digitada ja tem 
function letraRep(input) {
    var nInput = document.getElementsByClassName("letra");
    for (i = 0; i < nInput.length; i++) {
        if (document.getElementById("letra" + i).value == input.value) {
            g--;
        }
    }
}

function reiniciar() {
    for (i = 0; i < posicao.length; i++) {
        posicao.shift();
    }
    input = document.getElementsByClassName("letra");
    for (i = 0; i < palavra.length; i++) {
        document.getElementById("jogo").removeChild(input[0]);
    }
    document.getElementById("jogadas").value = "";
    document.getElementById("jog").value = "";
    document.getElementById("nav").innerHTML = "";
    document.getElementById("jog").removeAttribute("disabled", "disabled");
    inicia();
}

//gera a palavra que vem de um array
function gerarPalavra() {
    num = Math.floor(Math.random() * palavras.length);
    if (numer == num) {
        num = Math.floor(Math.random() * palavras.length);
    }
    numer = num;
    palavra = palavras[num];
}

//cria inputs dimanicamente
function criarInput(i) {
    input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "letra" + i);
    input.setAttribute("class", "letra");
    input.setAttribute("disabled", "disabled");
    input.setAttribute("maxlength", "1");
    return input;
}

function exibeCaixaDeTexto(){
    document.getElementById('adicionaNovaPalavra').style.display = 'block';
}

function adicionar() {
    var novaPalavra = document.getElementById("novaPalavra").value;
    palavras.push(novaPalavra)
    console.log(palavras)
  }