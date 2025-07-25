// const btnMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
// const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

// btnMostrarProjetos.addEventListener("click", () => {
//     mostrarMaisProjetos();
//     esconderBotao();
// });

// function mostrarMaisProjetos() {
//     projetosInativos.forEach(projetoInativo => {
//         projetoInativo.classList.add("ativo");
//     });
// }

// function esconderBotao(){
//     btnMostrarProjetos.classList.add("remover");
// }

// 1. Selecionar os elementos
const botaoMenu = document.getElementById('burguer');
const menu = document.getElementById('itens');
const linksDoMenu = document.querySelectorAll('#itens a');

// 2. Adicionar o evento de clique ao botão
botaoMenu.addEventListener('click', () => {
    // Adiciona ou remove a classe 'aberto' do menu
    menu.classList.toggle('aberto');

    // Troca o ícone do menu entre 'menu' e 'close'
    if (menu.classList.contains('aberto')) {
        botaoMenu.textContent = 'close';
    } else {
        botaoMenu.textContent = 'menu';
    }
});

// 3. Fechar o menu ao clicar em um link
linksDoMenu.forEach((link) => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            menu.classList.remove('aberto');
            botaoMenu.textContent = 'menu';
        }, 300);
    });
});

const header = document.querySelector('.cabecalho');
window.addEventListener('scroll', () => {
    // Se o scroll vertical for maior que 10 pixels
    if (window.scrollY > 10) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
