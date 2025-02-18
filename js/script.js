document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    const menuLinks = document.querySelectorAll(".sidebar a");
    const homeLink = document.getElementById("homeLink");

    // Alternar a barra lateral ao clicar no botão
    menuToggle.addEventListener("click", function () {
        toggleMenu();
    });

    // Fechar menu ao clicar em qualquer item (exceto HOME)
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o link de recarregar a página
            
            if (link === homeLink) {
                // Se for HOME, abrir o menu e mostrar a tela inicial
                sidebar.classList.remove("hidden");
                content.classList.remove("full-width");
                menuToggle.classList.add("menu-active");
                showPage("home");
            } else {
                // Para outros links, fechar o menu e exibir a página
                sidebar.classList.add("hidden");
                content.classList.add("full-width");
                menuToggle.classList.remove("menu-active");
            }
        });
    });
});

// Alterna a exibição do menu lateral
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    const menuToggle = document.getElementById("menuToggle");

    sidebar.classList.toggle("hidden");
    content.classList.toggle("full-width");
    menuToggle.classList.toggle("menu-active");
}

// Exibe a página correspondente
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}
