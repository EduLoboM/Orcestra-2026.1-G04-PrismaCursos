/**
 * Lógica da seção "Nossos Cursos"
 * Gerencia a filtragem de categorias (Tecnologia, Gestão, Design)
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // elementos necessários da tela
    const botoesFiltro = document.querySelectorAll('.botao-filtro');
    const cartoesCurso = document.querySelectorAll('.cartao-curso');
    const textoInformativo = document.getElementById('texto-informativo-cursos');

    const descricoesDaTrilha = {
        'design': 'Aprenda ferramentas e processos utilizados por designers profissionais no mercado digital.',
        'tecnologia': 'Aprenda programação, dados e segurança digital com foco em prática e inovação.',
        'gestao': 'Formações voltadas para liderança, organização e crescimento profissional.'
    };

    // esconde/mostra os cards baseados na categoria clicada
    function filtrarCursos(categoriaEscolhida) {
        
        // Passa por todos os cartões de curso
        cartoesCurso.forEach(cartao => {
            // Se o cartão for da categoria clicada, removemos a classe 'oculto'
            if (cartao.getAttribute('data-categoria') === categoriaEscolhida) {
                cartao.classList.remove('oculto');
            } else {
                // Caso contrário, adicionamos a classe 'oculto'
                cartao.classList.add('oculto');
            }
        });

        // atualiza a frase abaixo do carrossel
        if (descricoesDaTrilha[categoriaEscolhida]) {
            textoInformativo.textContent = descricoesDaTrilha[categoriaEscolhida];
        }
    }

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            
            botao.classList.add('ativo');
            
            const categoria = botao.getAttribute('data-categoria');
            filtrarCursos(categoria);
        });
    });

    // iniciar com os cursos de Tecnologia já filtrados
    function iniciarFiltroPadrao() {
        const botaoPadrao = document.querySelector('.botao-filtro.ativo');
        if (botaoPadrao) {
            filtrarCursos(botaoPadrao.getAttribute('data-categoria'));
        }
    }
    iniciarFiltroPadrao();

});