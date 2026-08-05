const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

function openMobileMenu() {
    menu.classList.add("open");
    menu.style.maxHeight = menu.scrollHeight + "px";
}

function closeMobileMenu() {
    // pin current height first so the browser has a real starting value to animate from
    menu.style.maxHeight = menu.scrollHeight + "px";
    requestAnimationFrame(() => {
        menu.classList.remove("open");
        menu.style.maxHeight = "0px";
    });
}

toggle.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

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

// Mobile "Plans" accordion
document.querySelectorAll(".mobile-has-dropdown > .mobile-dropdown-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.closest("li").classList.toggle("open");
        // resync the outer panel's max-height once the submenu's own
        // transition finishes, so it doesn't get cut off or leave a gap
        if (menu.classList.contains("open")) {
            setTimeout(() => {
                menu.style.maxHeight = menu.scrollHeight + "px";
            }, 210);
        }
    });
});

const track = document.getElementById('logo-track');
if (track) {
    track.innerHTML += track.innerHTML;
}