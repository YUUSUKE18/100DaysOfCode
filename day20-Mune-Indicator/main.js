const line = document.querySelector("#line");
const navLinks = document.querySelectorAll("nav a");

function indicator(e) {
  line.style.left = e.offsetLeft + "px";
  line.style.width = e.offsetWidth + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    console.log(e);
    indicator(e.target);
  });
});
