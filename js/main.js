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

        //tömmer formuläret om det är korrekt ifyllt
        if (validateForm()) {
            contactForm.reset();
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
    //visa eventuella felmeddelanden
    displayErrors();

    //returnerar true eller false
    return errors.length === 0;
}

//Visar felmeddelanden på sidan
function displayErrors() {
    //tar bort tidigare felmeddelanden
    let errorList = document.querySelector("#error-list");

    if (!errorList) { //kontrollerar om listan finns
        errorList = document.createElement("ul"); //skapar punktlista
        errorList.id = "error-list"; //ge listan ett id
        contactForm.prepend(errorList); //felmeddelanden kommer övanför formuläret
    }
    errorList.innerHTML = ""; //tömmer tidigare felmeddelanden

    //går igenom arrayen
    errors.forEach(function (error) {
        const liElement = document.createElement("li"); //skapa lielement
        liElement.textContent = error;
        errorList.appendChild(liElement); //lägger till felmeddelanden i listan
    });
}