// Função para criptografar texto
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar texto
function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para validar o texto
function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);
}

// Função para lidar com a criptografia
function botaoCriptografar() {
    const textoInput = document.querySelector('.textArea').value;
    if (!validarTexto(textoInput)) {
        alert('Por favor, insira apenas letras minúsculas e espaços.');
        return;
    }
    
    const resultado = criptografarTexto(textoInput);
    document.querySelector('.mensagem').value = resultado;
    document.querySelector('.semMensagens').style.display = 'none';
    document.querySelector('.mensagemInformacao').style.display = 'none';
    document.querySelector('.botaoCopiar').disabled = false;
}

// Função para lidar com a descriptografia
function botaoDescriptografar() {
    const textoInput = document.querySelector('.textArea').value;
    if (!validarTexto(textoInput)) {
        alert('Por favor, insira apenas letras minúsculas e espaços.');
        return;
    }
    
    const resultado = descriptografarTexto(textoInput);
    document.querySelector('.mensagem').value = resultado;
    document.querySelector('.semMensagens').style.display = 'none';
    document.querySelector('.mensagemInformacao').style.display = 'none';
    document.querySelector('.botaoCopiar').disabled = false;
}

// Função para copiar o resultado para a área de transferência
function copiarParaAreaDeTransferencia() {
    const resultadoArea = document.querySelector('.mensagem');
    resultadoArea.select();
    document.execCommand('copy');
}

// Adiciona evento de clique ao botão de copiar
document.querySelector('.botaoCopiar').addEventListener('click', copiarParaAreaDeTransferencia);
