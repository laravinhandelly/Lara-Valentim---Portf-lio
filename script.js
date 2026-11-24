
// =====================================
// 1. TEMA CLARO E ESCURO
// =====================================

const botaoTema = document.querySelector("#tema-btn");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");

    const temaEscuro = document.body.classList.contains("tema-escuro");

    botaoTema.textContent = temaEscuro ? "☀" : "☾";

    botaoTema.setAttribute(
        "aria-label",
        temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"
    );

});


// =====================================
// 2. MENU PARA CELULAR
// =====================================

const botaoMenu = document.querySelector("#menu-toggle");
const menu = document.querySelector("#nav-links");

botaoMenu.addEventListener("click", function () {

    const aberto = menu.classList.toggle("aberto");

    botaoMenu.textContent = aberto ? "×" : "☰";

    botaoMenu.setAttribute("aria-expanded", aberto);

    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

});


// Fecha o menu ao escolher uma seção

const linksMenu = document.querySelectorAll(".nav-links a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("aberto");

        botaoMenu.textContent = "☰";

        botaoMenu.setAttribute("aria-expanded", "false");

        botaoMenu.setAttribute("aria-label", "Abrir menu");

    });

});


// =====================================
// 3. FORMULÁRIO DE CONTATO
// =====================================

const formulario = document.querySelector("#form-contato");

const mensagemStatus = document.querySelector("#mensagem-status");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();

    if (!nome) {
        mensagemStatus.textContent = "Por favor, informe seu nome.";
        return;
    }

    mensagemStatus.textContent =
        `Obrigada pela mensagem, ${nome}! Seus dados foram preenchidos com sucesso.`;

    formulario.reset();

});
