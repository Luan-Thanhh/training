const navbar = document.querySelector(".navbar");
const iconMobile = document.querySelector(".navbar__icon-mobile");
const listMobile = document.querySelector(".navbar__list-mobile");
const overlayMobile = document.querySelector(".navbar__overlay-mobile");

function displayMenuOnMobile() {
  navbar.setAttribute("style", "border-bottom: 1px solid #ffffff;");
  iconMobile.classList.toggle("active");
  listMobile.classList.toggle("show");
  overlayMobile.classList.toggle("show");
}

iconMobile.onclick = displayMenuOnMobile;

overlayMobile.onclick = displayMenuOnMobile;

console.log(navbar.style.borderBottom);
