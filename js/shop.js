"use strict";

/*förstoring av sticker*/
const stickerImages = document.querySelectorAll(".sticker-image"); //hämtar element

stickerImages.forEach(function (image) { //går igenom varje sticker bild
    image.addEventListener("click", function () { //lyssnar efter click
        image.classList.toggle("enlarged"); //växlar mellan normal och förstorad bild
    });
});