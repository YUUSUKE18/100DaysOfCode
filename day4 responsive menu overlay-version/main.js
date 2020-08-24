const toggleMenu = document.getElementById("menu-toggle-icon");
toggleMenu.addEventListener("click", menuToggle);

function menuToggle() {
  const nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");
}
