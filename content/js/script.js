function calcular() {
    var resultado = 0;
    var numero1 = parseInt(document.getElementById('primeiroNumero').value);
    var numero2 = parseInt(document.getElementById('segundoNumero').value);
    var operacao = document.getElementById('tipoOperacao').value;


    switch (operacao) {
        case '+':
            resultado = adicao(numero1, numero2);
            break;

        case '-':
            resultado = subtracao(numero1, numero2);
            break;

        case '/':
            resultado = divisao(numero1, numero2);
            break;

        case '*':
            resultado = multiplicacao(numero1, numero2);
            break;

        case '^':
            resultado = potenciacao(numero1, numero2);
            break;
    }

    document.getElementById('resultado').value = resultado;
}

function adicao(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function potenciacao(n1, n2) {
    return Math.pow(n1, n2);
}