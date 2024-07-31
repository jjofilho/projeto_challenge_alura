const textArea = document.querySelector(".textArea");
const mensagem = document.querySelector(".mensagem");

function botaoCriptografar() {
    let textoCritografado = criptografar(textArea.value);
    mensagem.value = textoCritografado;
    textArea.value = "";
}

function criptografar(textoCriptografado) {
    return textoCriptografado
        .replaceAll(/e/g, "enter")
        .replaceAll(/i/g, "imes")
        .replaceAll(/a/g, "ai")
        .replaceAll(/o/g, "ober")
        .replaceAll(/u/g, "ufat");
}

function botaoDescriptografar() {
    let textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}
function descriptografar(textoDescriptografado) {
    return textoDescriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a") 
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}