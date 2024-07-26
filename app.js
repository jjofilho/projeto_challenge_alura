function criptografarTexto(texto) {
    return texto
        .replace(/a/g, "ai")    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decriptografarTexto(texto) {
    return texto
        .replace(/ai/g, "a")    
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

let textoEntrada = "parabens pelo projeto alura one";
let textoCriptografado = criptografarTexto(textoEntrada);
let textoDecriptografado = decriptografarTexto(textoCriptografado);

/* Testando resultados no console */
console.log("Texto Original: " + textoEntrada);
console.log("Texto Criptografado: " + textoCriptografado);
console.log("Texto Decriptografado: " + textoDecriptografado);