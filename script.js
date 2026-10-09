const NUMERO_MINIMO = 1;
const NUMERO_MAXIMO = 100; 


const textoNumeroSorteado = document.querySelector('.texto__numero_sorteado');
const conteudoExibicao = document.querySelector('.conteudo__exibicao');
const botoes = document.querySelectorAll('.botao');
const botaoSortear = botoes[0];


let numerosDisponiveis = [];
let numerosSorteados = [];


function inicializar() {
    numerosDisponiveis = [];
    for (let i = NUMERO_MINIMO; i <= NUMERO_MAXIMO; i++) {
        numerosDisponiveis.push(i);
    }
    numerosSorteados = [];
    textoNumeroSorteado.textContent = '';

    const listaAntiga = conteudoExibicao.querySelector('.lista_sorteados');
    if (listaAntiga) {
        listaAntiga.remove();
    }

    const novaLista = document.createElement('div');
    novaLista.classList.add('lista_sorteados');
    conteudoExibicao.appendChild(novaLista);

    botaoSortear.disabled = false;
}


function sortear() {
    if (numerosDisponiveis.length === 0) {
        alert('Todos os números já foram sorteados! Clique em "Reiniciar" para jogar novamente.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length);
    const numero = numerosDisponiveis[indiceAleatorio];

    numerosDisponiveis.splice(indiceAleatorio, 1);
    numerosSorteados.push(numero);

    textoNumeroSorteado.textContent = numero;

    const listaSorteados = conteudoExibicao.querySelector('.lista_sorteados');
    const spanNumero = document.createElement('span');
    spanNumero.classList.add('numero_sorteado_item');
    spanNumero.textContent = numero;
    listaSorteados.appendChild(spanNumero);

    if (numerosDisponiveis.length === 0) {
        botaoSortear.disabled = true;
        alert('Todos os números foram sorteados.');
    }
}

function reiniciar() {
    inicializar();
}

inicializar();