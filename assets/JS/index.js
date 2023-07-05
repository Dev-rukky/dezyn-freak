const navMenu = document.getElementById("nav_menu"),
    navOpen = document.getElementById("nav-open"),
    navClose = document.getElementById("nav-close"),
    navLinks = document.querySelectorAll("nav-link");

navOpen.addEventListener("click", () => {
    navMenu.classList.add("nav-menu--open");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu--open");
});

navLinks.forEach(links => {
    links.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu--open")
    });
});

