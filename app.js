let listaSorteados = [];
let maiorNumero = 1000;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;

function textoNaPagina(tag, texto) {
    let pagina = document.querySelector(tag);
    pagina.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    textoNaPagina('h1', 'O NÚMERO SECRETO');
    textoNaPagina('p', `Está entre 1 e ${maiorNumero}`);
}

mensagemInicial();

function verChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let tentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
        let numeroTentativa = `Com ${tentativa} ${tentativas}! \\o/`;
        textoNaPagina('h1', 'ACERTOU!');
        textoNaPagina('p', numeroTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        if (chute > numeroSecreto) {
            textoNaPagina('h1', 'Você errou.');
            textoNaPagina('p', 'Tente um número menor...');
        } else {
            textoNaPagina('h1', 'Você errou.');
            textoNaPagina('p', 'Tente um número maior...');
        }
        tentativa++;
        limparChute();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * maiorNumero + 1);
    let quantidadeElementosLista = listaSorteados.length;
    if (quantidadeElementosLista == maiorNumero) {
        listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verReiniciar() {
    numeroSecreto = numeroAleatorio();
    limparChute();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}