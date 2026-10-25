const navigation = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector("#nav-links");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

navigation.classList.add("enhanced");
menuButton.hidden = false;

function closeMenu() {
    navigationLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
}

menuButton.addEventListener("click", function () {
    const isOpen = navigationLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close" : "Menu";
});

navigationLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

navigation.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        navigationLinks.classList.contains("open")
    ) {
        closeMenu();
        menuButton.focus();
    }
});

const desktopScreen = window.matchMedia("(min-width: 701px)");

desktopScreen.addEventListener("change", closeMenu);