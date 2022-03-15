function limpar() {
    document.querySelector('input#visor').value = '';
}

function exibir(valor) {
    document.querySelector('input#visor').value += valor;
}

function calcular() {
    var resultado = 0;
    resultado = document.querySelector('input#visor').value;

    document.querySelector('input#visor').value = '';
    document.querySelector('input#visor').value = eval(resultado);
} 
