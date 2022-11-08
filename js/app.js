const iconMobile = document.querySelector(".navbar__icon-mobile");
const listMobile = document.querySelector(".navbar__list-mobile");
const overlayMobile = document.querySelector(".navbar__overlay-mobile");

function displayMenuOnMobile() {
  iconMobile.classList.toggle("active");
  listMobile.classList.toggle("active");
  overlayMobile.classList.toggle("active");
}

iconMobile.onclick = displayMenuOnMobile;

overlayMobile.onclick = displayMenuOnMobile;

console.log(iconMobile);
