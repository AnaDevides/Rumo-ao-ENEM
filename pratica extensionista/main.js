// JavaScript
var depoimentoContainer = document.querySelector('.depoimento-container');
var depoimentos = document.querySelectorAll('.depoimento');
var botaoAnterior = document.querySelector('.anterior');
var botaoProximo = document.querySelector('.proximo');
var indiceAtual = 0;

// Função para atualizar a exibição dos depoimentos
function atualizarDepoimentos() {
    for (var i = 0; i < depoimentos.length; i++) {
        if (i >= indiceAtual && i < indiceAtual + 3) {
            depoimentos[i].style.display = 'block';
        } else {
            depoimentos[i].style.display = 'none';
        }
    }
}

// Inicialmente, mostre os três primeiros depoimentos
atualizarDepoimentos();

botaoAnterior.addEventListener('click', function() {
    // Decrementa o índice atual
    indiceAtual--;
    // Se o índice atual for menor que 0, defina-o como 0
    if (indiceAtual < 0) {
        indiceAtual = 0;
    }
    // Atualiza a exibição dos depoimentos
    atualizarDepoimentos();
});

botaoProximo.addEventListener('click', function() {
    // Incrementa o índice atual
    indiceAtual++;
    // Se o índice atual for maior que o número de depoimentos menos 3, defina-o como o número de depoimentos menos 3
    if (indiceAtual > depoimentos.length - 3) {
        indiceAtual = depoimentos.length - 3;
    }
    // Atualiza a exibição dos depoimentos
    atualizarDepoimentos();
});
