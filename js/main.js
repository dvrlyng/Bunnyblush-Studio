"use strict";
/*
* Projektuppgift
* Namn: Darlyng Leyton Bueno
*/

/*hämta element*/
const menuToggle = document.querySelector(".menu-toggle"); //ny variabel och hämtar element
const menu = document.querySelector(".menu");
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");


/*menu*/
menuToggle.addEventListener("click", function () { //lyssnar efter ett click
    menu.classList.toggle("open"); //kan gömma meny och öppna den
});

//array för fel meddelanden
let errors = [];

//validering kontaktformulär
if (contactForm) {
    contactForm.addEventListener("submit", function (event) { //lyssnar på submit
        event.preventDefault(); //sidan laddas inte om

    if (validateForm()) {
        const status = document.createElement("p"); //ny elemnt
        status.textContent = "Formuläret är korret ifyllt!♡"
        contactForm.appendChild(status); //meddelandet visas på sidan
    }
    });
}

function validateForm() {
    errors = []; //tömmer arrayen
    //kontrollerrar formulärets obligatoriska fält
    if (nameInput.value.trim() === "") {
        errors.push("Du måste ange ditt namn.");
    }
    if (emailInput.value.trim() === "") {
        errors.push("Du måste ange ditt e-postadress.");
    }
    if (messageInput.value.trim() === "") {
        errors.push("Du måste skriva ett meddelande.")
    }
}

