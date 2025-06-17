    document.addEventListener("DOMContentLoaded", function () {
        const menuBtn = document.getElementById("menuBtn");
        const popupMenu = document.querySelector(".tmp-popup-mobile-menu");
        const closeBtn = document.querySelector(".close-button");

        // Change animation to slide from left
        popupMenu.style.transform = "translateX(-100%)";
        popupMenu.style.transition = "opacity 0.3s ease, transform 0.3s ease";

        // Open menu
        menuBtn.addEventListener("click", function () {
            popupMenu.style.display = "block";
            setTimeout(() => {
                popupMenu.classList.add("active");
                popupMenu.style.transform = "translateX(0)";
            }, 10);
        });

        // Close menu
        function closeMenu() {
            popupMenu.classList.remove("active");
            popupMenu.style.transform = "translateX(-100%)";
            popupMenu.addEventListener("transitionend", function handler() {
                popupMenu.style.display = "none";
                popupMenu.removeEventListener("transitionend", handler);
            });
        }

        closeBtn.addEventListener("click", closeMenu);

        // Optional: Close menu when clicking outside the menu content
        popupMenu.addEventListener("click", function (e) {
            if (e.target === popupMenu) {
                closeMenu();
            }
        });
    });