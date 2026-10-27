"use strict";
/*
* Projektuppgift
* Namn: Darlyng Leyton Bueno
*/

/*hämta element*/
const menuToggle = document.querySelector(".menu-toggle"); //ny variabel och hämtar element
const menu = document.querySelector(".menu");
const contactForm = document.querySelector("#contact-form");

/*menu*/
menuToggle.addEventListener("click", function () { //lyssnar efter ett click
    menu.classList.toggle("open"); //kan gömma meny och öppna den
});

/*validering*/
