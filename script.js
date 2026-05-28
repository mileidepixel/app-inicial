function verificarVaga() {
    // 1. Capturando os valores digitados nas caixas de input do HTML
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    // Capturando a div onde vamos exibir o resultado final
    const divResultado = document.getElementById('resultado');

    // Validação simples: impede o envio se algum campo estiver vazio
    if (!nome || isNaN(idade) || isNaN(altura)) {
        divResultado.style.display = "block";
        divResultado.className = "resultado erro";
        divResultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return; // Para a execução da função aqui
    }

    // 2. Aplicando o critério da vaga (Operador lógico && significa "E")
    // A idade DEVE ser maior ou igual a 18 E a altura DEVE ser maior ou igual a 1.70
    if (altura >= 1.70 && idade >= 18) {
        
        // Se passar na condição: ativa a div, põe a classe verde de sucesso e exibe o texto
        divResultado.style.display = "block";
        divResultado.className = "resultado sucesso";
        divResultado.innerHTML = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`;
        
    } else {
        
        // Se falhar: ativa a div, põe a classe vermelha de erro e exibe o texto de reprovação
        divResultado.style.display = "block";
        divResultado.className = "resultado erro";
        divResultado.innerHTML = `Infelizmente você não é apto à vaga.`;
        
    }
}