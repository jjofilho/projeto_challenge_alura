let botaoCriptografar = document.getElementById('botaoCriptografar');
let botaoDescriptografar = document.getElementById('botaoDescriptografar');
let inputTexto = document.getElementById('inputTexto');
let resultadoTexto = document.getElementById('resultadoTexto');

function criptografarClick() {
    let textoEntrada = inputTexto.value;
    let textoCriptografado = criptografarTexto(textoEntrada);
    resultadoTexto.innerText = textoCriptografado;
}

function descriptografarClick() {
    let textoEntrada = inputTexto.value;
    let textoDescriptografado = descriptografarTexto(textoEntrada);
    resultadoTexto.innerText = textoDescriptografado;
}

botaoCriptografar.addEventListener('click', criptografarClick);
botaoDescriptografar.addEventListener('click', descriptografarClick);

function criptografarTexto(texto) {
    return texto
        .replace(/a/g, "ai")    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
    return texto
        .replace(/ai/g, "a")    
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
