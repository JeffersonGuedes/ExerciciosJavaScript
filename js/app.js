// Exercícios Function
const exercicio1 = document.getElementById('exercicio1');
exercicio1.addEventListener('click', function() {
    // ENTRADA
    const valor1 = informarValor();
    const valor2 = informarValor();

    // PROCESSAMENTO
    const resultado = somar(valor1, valor2);

    // SAÍDA
    mostrarResultado(`O resultado da soma de ${valor1} + ${valor2} é ${resultado}`, 1);
});

const exercicio2 = document.getElementById('exercicio2');
exercicio2.addEventListener('click', () => {
    // ENTRADA
    const texto = informarTexto();

    // PROCESSAMENTO
    const resultado = contarVogais(texto);

    // SAÍDA
    mostrarResultado(`O número de vogais no texto ${texto} é ${resultado}`, 2);
});

// Exercício 1
function somar(_valor1, _valor2) {
    return _valor1 + _valor2;
}

// Exercício 2
function contarVogais(_texto) {
    // g == global, i == case sensitive
    return _texto.replace(/[^aeiou]/gi, "").length;

    // Exemplo de Replace (teste com: 25.00)
    // console.log(_texto.replace(".", ","));
}

// ===== Function gerais =====
function informarValor() {
    return Number(prompt("Informe o valor"));
}

function informarTexto() {
    return prompt("Informe o texto");
}

function mostrarResultado(mensagem, id) {
    console.log(mensagem);
    alert(mensagem);
    // document.write(mensagem);
    // document.getElementById('resultado1').innerText = `<h3>${mensagem}</h3>`;
    document.getElementById(`resultado${id}`).innerHTML= `<h3>${mensagem}</h3>`;
}