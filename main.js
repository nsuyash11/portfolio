//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const portrait = document.querySelector(".portrait");
const navItems = document.querySelectorAll(".nav-item");

//Initial State of Menu
let menuShown = false;

//Adding listener
menuBtn.addEventListener("click", toggleMenu);

//Helper functions
function toggleMenu() {
  if (!menuShown) {
    menuBtn.classList.add("cross");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    portrait.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    menuShown = true;
  } else {
    menuBtn.classList.remove("cross");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    portrait.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    menuShown = false;
  }
}
