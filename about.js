const image = document.querySelectorAll(".moving-imag");

image.forEach((image) => {
  const index = parseInt(image.getAttribute("data-index"));
  image.style.animationDelay = `${(index - 1) * 2}s`; // Adjust the delay as needed
});

//
// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// slider@@@@@@
// submenu
//
document.addEventListener("DOMContentLoaded", function () {
  const toggleNav = document.getElementById("navbarToggle");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const closeNav = document.getElementById("navbar-close");

  toggleNav.addEventListener("click", () => {
    sidebarOverlay.classList.add("show");
    closeNav.classList.add("show");
    toggleNav.classList.add("show");
  });
  closeNav.addEventListener("click", () => {
    sidebarOverlay.classList.remove("show");
    closeNav.classList.remove("show");
    toggleNav.classList.remove("show");
  });
});
//

// about anima uup
