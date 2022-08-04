const hamburgerBtn = document.querySelector(".hamburger");
const sidebarBtn = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
  sidebarBtn.classList.toggle("show-sidebar");
  hamburgerBtn.classList.toggle("hamburger-active");
});
