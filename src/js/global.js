const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("mobile-menu-overlay");

function openMobileMenu() {
    menu.classList.add("open");
    overlay?.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
    menu.classList.remove("open");
    overlay?.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

// Click the dimmed backdrop to close the sidebar
overlay?.addEventListener("click", closeMobileMenu);

// Close on Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
        closeMobileMenu();
    }
});

// Optional dedicated close ("X") button inside the sidebar —
// only wires up if you add <button id="mobile-menu-close">...</button>
document.getElementById("mobile-menu-close")?.addEventListener("click", closeMobileMenu);

// Desktop "Plans" dropdown — click to toggle (also opens on hover via CSS)
document.querySelectorAll(".has-dropdown > .dropdown-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
        const item = btn.closest(".has-dropdown");
        const isOpen = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen);
    });
});

// Close desktop dropdown when clicking outside it
document.addEventListener("click", (e) => {
    document.querySelectorAll(".has-dropdown.open").forEach((item) => {
        if (!item.contains(e.target)) {
            item.classList.remove("open");
            item.querySelector(".dropdown-trigger")?.setAttribute("aria-expanded", "false");
        }
    });
});

// Mobile "Plans" accordion (still height-animated internally, independent of the sidebar itself)
document.querySelectorAll(".mobile-has-dropdown > .mobile-dropdown-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.closest("li").classList.toggle("open");
    });
});

const track = document.getElementById('logo-track');
if (track) {
    track.innerHTML += track.innerHTML;
}