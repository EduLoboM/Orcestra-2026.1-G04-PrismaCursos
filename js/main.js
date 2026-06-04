/**
 * PrismaCursos — Script principal
 *
 * Adicione aqui toda a lógica JavaScript do projeto.
 * Mantenha funções pequenas e bem nomeadas.
 */
"use strict";

// ========== Inicialização ==========
document.addEventListener("DOMContentLoaded", () => {
  console.log("PrismaCursos carregado com sucesso!");
});

/*
document.querySelector("#nova-secao").addEventListener("click", () => {
  console.log("Seção clicada!");
});
*/


// ------ GAMIFICAÇÃO DESCONTO PROGESSIVO ------
let descontoAtual = 5; 

//flags: evitar o desconto infinito
let clicouCursos = false;
let clicouSobre = false;
let clicouContato = false;


//FUNÇÃO QUE ATUALIZA O VISUAL
function atualizarVisualDoDesconto() {
  
  const fundoTriangulo = document.getElementById('cor-desconto');
  const textoPorcentagem = document.getElementById('valor-desconto');

  textoPorcentagem.innerText = descontoAtual + "%";  
  fundoTriangulo.className = "triangulo-conteudo desconto-" + descontoAtual; // Atualiza a cor e reescreve a classe. se desconto for 15, a string vira "triangulo-conteudo desconto-15"
}


// Cliques em Cursos,Sobre,Contato:
document.getElementById('link-cursos').addEventListener('click', function() { 
  if (clicouCursos === false) { //só adiciona 1vez
    descontoAtual += 5; 
    clicouCursos = true;               
    atualizarVisualDoDesconto();   // Roda a função que muda a tela
  }
});

document.getElementById('link-sobre').addEventListener('click', function() {
  if (clicouSobre === false) {
    descontoAtual += 5; 
    clicouSobre = true;
    atualizarVisualDoDesconto();
  }
});

document.getElementById('link-contato').addEventListener('click', function() {
  if (clicouContato === false) {
    descontoAtual += 5;
    clicouContato = true;
    atualizarVisualDoDesconto();
  }
});


// --------- VERIFICACOES DE INPUT ---------
const btnEnviar = document.getElementById('btn-enviar'); //Pegamos o botão no HTML pela id

//lista de cursos válidos 
const cursosValidos = ['devops','gestão de projetos','ui/ux', 'design 3d',
  'gestão pessoal','data analytics','motion design','design gráfico',
  'desenvolvimento full stack','cybersecurity','gestão de projetos',
  'marketing digital','liderança e gestão de pessoas']; 

  btnEnviar.addEventListener('click', function(evento) { //evento é um objeto do js q guarda informacoes da açao(no caso click),do elemento q sofreu a ação...
  evento.preventDefault(); // impede que o <a>(link) te leve para a outra página automaticamente

  // Pegamos os valores que o usuário digitou e tiramos os espaços em branco nas pontas (trim)
  const nome = document.getElementById('input-nome').value.trim();
  const email = document.getElementById('input-email').value.trim();
  const celular = document.getElementById('input-celular').value.trim();
  const curso = document.getElementById('input-curso').value.trim().toLowerCase(); // Transforma em minúscula
  const assunto = document.getElementById('input-assunto').value.trim();

  let erros = []; // Array para guardar erros

  // VALIDAÇÕES
  // 1. Checa se tem algum campo vazio
  if (!nome || !email || !celular || !curso || !assunto) {
    erros.push("Por favor, preencha todos os campos do formulário.");
  }

  // 2. Validação de E-mail (Verifica se tem '@' e '.')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Usamos Regex simples
  if (email && !emailRegex.test(email)) {
    erros.push("O e-mail digitado não é válido.");
  }

  // 3. Validação de Celular (Exige entre 10 e 11 números)
  const apenasNumerosCelular = celular.replace(/\D/g, ''); // O \D remove tudo que não for número (espaços, traços, parênteses) antes de contar
  if (celular && (apenasNumerosCelular.length < 10 || apenasNumerosCelular.length > 11)) {
    erros.push("O número de celular deve seguir o formato (XX) XXXXX-XXXX e o número deve ter de 10 a 11 dígitos)."); 
  }

  // 4. Validação do Curso
  if (curso && !cursosValidos.includes(curso)) {
    erros.push("Curso não encontrado. Verifique se digitou corretamente.");
  }

  //RESULTADO FINAL
  if (erros.length > 0) { //exibe os alertas e NÃO muda de página
    alert(erros.join('\n\n')); // Junta todos os erros com uma quebra de linha e exibe
  } 
  else {
    const paginaDestino = btnEnviar.getAttribute('href'); //extrai o link no href do btnEnviar
    window.location.href = paginaDestino; //mudamos de pág manualmente
  }
} //funcao no parametro
);