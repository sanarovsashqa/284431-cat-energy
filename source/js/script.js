var toggleBtn = document.querySelector(".main-nav-toggle");
var toggleMenu = document.querySelector(".main-nav");

  toggleBtn.addEventListener("click", function () {
    toggleMenu.classList.toggle("main-nav--open");
  });

