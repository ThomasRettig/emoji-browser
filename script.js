// 1. Dark Mode Toggle
const toggle = document.querySelector(".dark-mode-toggle");
toggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.getAttribute("data-dark-mode") === "true";
    document.documentElement.setAttribute("data-dark-mode", !isDarkMode);
    localStorage.setItem("dark-mode", !isDarkMode);
});

// 2. Character Grid Hover/Zoom Effect
const grid = document.querySelector(".character-grid");
const gridzoom = document.querySelector(".character-grid-zoom");

if (grid && gridzoom) {
    // Throttling function to prevent excessive DOM updates
    const throttle = (func, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    grid.addEventListener("mousemove", throttle((e) => {
        if (e.target.tagName === "LI") {
            gridzoom.innerHTML = e.target.innerHTML;
        }
    }, 100));
}