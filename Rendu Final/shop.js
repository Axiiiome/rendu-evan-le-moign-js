document.addEventListener("DOMContentLoaded", function () {
  const lightbox = new SimpleLightbox(".card a");

  const options = {
    gutterPixels: 50,
  };

  const filterizr = new Filterizr(".portfolio-elements", options);

  const themeButton = document.getElementById("theme");

  function onClick() {
    document.body.classList.toggle("dark");
  }

  themeButton.addEventListener("click", onClick);
});
