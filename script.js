// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Fechar menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ==============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==============================

const elements = document.querySelectorAll(
    ".service-card, .portfolio-item, .about-image"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    observer.observe(element);

});


// ==============================
// FORMULÁRIO
// ==============================

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.textContent =
        "Mensagem enviada com sucesso! Entraremos em contato em breve.";

    formMessage.style.color = "green";

    form.reset();

});