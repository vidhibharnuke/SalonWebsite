// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function() {
      nav.classList.toggle("open");
    });
  }
});