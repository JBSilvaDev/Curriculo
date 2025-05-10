// Declaração das variáveis (escopo global)
var nome = "João Silva"; // Usando 'var' para escopo global
var idade = 30;

// Faz uma requisição para o arquivo JSON
fetch('dados.json')
    .then(response => response.json()) // Converte a resposta em JSON
    .then(data => {
        // Acessa os dados e exibe no HTML
        document.getElementById("dados").innerHTML = 
            `Nome: ${data.nome}, Idade: ${data.idade}`;
    })
    .catch(error => {
        console.error("Erro ao carregar o JSON:", error);
    });