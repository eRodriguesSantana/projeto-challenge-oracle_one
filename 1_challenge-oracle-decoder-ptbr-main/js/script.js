function criptografar(word) {
    word = word.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    return word;
}

function verificaSeTemLetraMaiuscula(entrada) {
    var retorno = false;
    if (entrada.toLowerCase() != entrada) {
        alert("é proibido usar Letras Maiusculas");
        retorno = true;

    }
    return retorno;
}

document.getElementById("btn-cripto").addEventListener("click", function () {

    var textoCriptografado = document.getElementById("input-texto").value;
    if (verificaSeTemLetraMaiuscula(textoCriptografado)) {
        return;
    }

    document.getElementById("msg").value = criptografar(textoCriptografado);
})

document.getElementById("btn-descripto").addEventListener("click", function () {

    var textoCriptografado = document.getElementById("input-texto").value;
    textoCriptografado = textoCriptografado.replaceAll('e', 'enter')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    document.getElementById("msg").value = textoCriptografado;
})

document.getElementById("btn-clean").addEventListener("click", function () {
    document.getElementById("input-texto").value = "";
    document.getElementById("msg").value = "";
})

document.getElementById("btn-copy").addEventListener("click", function () {

    var copyText = document.getElementById("msg");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("o texto foi copiado: " + copyText.value);
})