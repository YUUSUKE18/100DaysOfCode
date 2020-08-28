const toggle = document.getElementsByClassName("toggle")[0];
const navbarList = document.getElementsByClassName("navbar-list")[0];
toggle.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});
