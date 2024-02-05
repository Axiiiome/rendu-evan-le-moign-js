document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
    },
  });
});

const themeButton = document.getElementById("theme");

function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);
