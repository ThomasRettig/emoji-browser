/**
 * Emoji Browser - Enhanced UX & Accessibility
 */

// 1. Dark Mode Toggle
const toggle = document.querySelector(".dark-mode-toggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        const isDarkMode = document.documentElement.getAttribute("data-dark-mode") === "true";
        document.documentElement.setAttribute("data-dark-mode", !isDarkMode);
        localStorage.setItem("dark-mode", !isDarkMode);
    });
}

// 2. Character Grid Core Layout Interactions
const grid = document.querySelector(".character-grid");
const gridzoom = document.querySelector(".character-grid-zoom");

if (grid && gridzoom) {
    // Dynamically make all emoji tiles keyboard-focusable
    const emojiTiles = grid.querySelectorAll(".character-grid-list > li");
    emojiTiles.forEach(tile => {
        tile.setAttribute("tabindex", "0");
        tile.setAttribute("role", "button");
    });

    // Throttling mousemove for high performance
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

    // Helper to update the preview pane content securely
    const updatePreview = (content) => {
        gridzoom.innerHTML = content;
    };

    // Action execution for copying to clipboard
    const toast = document.createElement("div");
    toast.className = "emoji-toast";
    document.body.appendChild(toast);
    let toastTimeout;

    const copyToClipboard = (emoji) => {
        navigator.clipboard.writeText(emoji).then(() => {
            toast.innerHTML = `Copied ${emoji} to clipboard!`;
            toast.classList.add("show");
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => toast.classList.remove("show"), 2000);
        }).catch(err => console.error("Clipboard copy failed: ", err));
    };

    // Mouse interactions
    grid.addEventListener("mousemove", throttle((e) => {
        if (e.target.tagName === "LI") updatePreview(e.target.innerHTML);
    }, 80));

    grid.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") copyToClipboard(e.target.innerHTML);
    });

    // Keyboard navigation handlers (Focus tracking & Key activations)
    grid.addEventListener("focusin", (e) => {
        if (e.target.tagName === "LI") updatePreview(e.target.innerHTML);
    });

    grid.addEventListener("keydown", (e) => {
        if (e.target.tagName === "LI") {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // Stop page scrolling down on Spacebar press
                copyToClipboard(e.target.innerHTML);
            }
        }
    });
}