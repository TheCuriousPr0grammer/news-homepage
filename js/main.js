// Creating the side menu functionality

const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const sideMenu = document.querySelector(".side-menu");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
	overlay.classList.toggle("inactive");
	sideMenu.classList.toggle("inactive");
});

closeBtn.addEventListener("click", () => {
	overlay.classList.toggle("inactive");
	sideMenu.classList.toggle("inactive");
});

// Close on click on overlay effect.

overlay.addEventListener("click", () => {
	overlay.classList.toggle("inactive");
	sideMenu.classList.toggle("inactive");
});
