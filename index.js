let buttonClose = document.querySelector(".button-close");
let mobileNav = document.querySelector(".hidden-nav-links");
let overlay = document.querySelector(".overlay");
let buttonOpen = document.querySelector(".menu-icon");

buttonClose.addEventListener("click", function (e) {
  e.preventDefault();
  mobileNav.style.transform = "translateX(100%)";
  overlay.style.transform = "translateX(100%)";
  overlay.style.opacity = "0";
});

buttonOpen.addEventListener("click", function (e) {
  e.preventDefault();
  mobileNav.style.transform = "translateX(0%)";
  overlay.style.transform = "translateX(0%)";
  overlay.style.opacity = "0.6";
});
