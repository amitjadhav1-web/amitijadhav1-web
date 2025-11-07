// DARK & LIGHT THEME SWITCH
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// HAMBURGER NAV MENU
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}
