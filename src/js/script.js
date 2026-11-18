// Sélectionner le conteneur du carrousel
const carousel = document.querySelector(".carousel__container");

// Sélectionner les deux boutons
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// Faire défiler vers la gauche au clic
prevButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: -276,
    behavior: "smooth"
  });
});

// Faire défiler vers la droite au clic
nextButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: 276,
    behavior: "smooth"
  });
});
