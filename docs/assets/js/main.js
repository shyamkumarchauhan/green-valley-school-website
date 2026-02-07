document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", function () {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
    nav.style.display = expanded ? "none" : "flex";
  });
});