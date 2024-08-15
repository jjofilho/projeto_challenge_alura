function inicializarConfiguracaoSite() {
    document.getElementById('imagem-decoderalura').style.display = 'block';
    document.querySelector('.textArea').value = '';
    document.querySelector('.mensagem').style.display = 'none';
    document.querySelector('.botaoCopiar').disabled = true;
    document.querySelector('.semMensagens').style.display = 'block';
    document.querySelector('.mensagemInformacao').style.display = 'block';
    document.getElementById('botaoCopiar').style.display = 'none';
}

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function botaoCriptografar() {
    const textoInput = document.querySelector('.textArea').value;
    if (!validarTexto(textoInput)) {
        alert('Por favor, insira apenas letras minúsculas e espaços.');
        return;
    }
    
    const resultado = criptografarTexto(textoInput);
    document.querySelector('.mensagem').style.display = 'block';
    document.querySelector('.mensagem').value = resultado;
    document.getElementById('imagem-decoderalura').style.display = 'none';
    document.querySelector('.semMensagens').style.display = 'none';
    document.querySelector('.mensagemInformacao').style.display = 'none';
    document.getElementById('botaoCopiar').style.display = 'block';
    document.querySelector('.botaoCopiar').disabled = false;
}

function botaoDescriptografar() {
    const textoInput = document.querySelector('.textArea').value;
    if (!validarTexto(textoInput)) {
        alert('Por favor, insira apenas letras minúsculas e espaços.');
        return;
    }
    
    const resultado = descriptografarTexto(textoInput);
    document.querySelector('.mensagem').style.display = 'block';
    document.querySelector('.mensagem').value = resultado;
    document.getElementById('imagem-decoderalura').style.display = 'none';
    document.querySelector('.semMensagens').style.display = 'none';
    document.querySelector('.mensagemInformacao').style.display = 'none';
    document.getElementById('botaoCopiar').style.display = 'block';
    document.querySelector('.botaoCopiar').disabled = false;
}

function copiarParaAreaDeTransferencia() {
    const resultadoArea = document.querySelector('.mensagem');
    resultadoArea.select();
    document.execCommand('copy');
    inicializarConfiguracaoSite();
    alert('Texto copiado com sucesso!');
}

window.onload = inicializarConfiguracaoSite();

document.querySelector('.botaoCopiar').addEventListener('click', copiarParaAreaDeTransferencia);