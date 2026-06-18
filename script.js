/**
 * Emoji Browser Pro - Core Utility Engine with Smart Search
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Management
    const toggle = document.querySelector(".dark-mode-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const isDarkMode = document.documentElement.getAttribute("data-dark-mode") === "true";
            document.documentElement.setAttribute("data-dark-mode", !isDarkMode);
            localStorage.setItem("dark-mode", !isDarkMode);
        });
    }

    // 2. Main Interface Nodes
    const grid = document.querySelector(".character-grid");
    const gridzoom = document.querySelector(".character-grid-zoom");
    const searchInput = document.getElementById("emoji-search");

    if (!grid || !gridzoom) return;

    // Build Toast Element
    const toast = document.createElement("div");
    toast.className = "emoji-toast";
    document.body.appendChild(toast);
    let toastTimeout;

    // Gather all individual tiles
    const emojiTiles = Array.from(grid.querySelectorAll(".character-grid-list > li"));
    emojiTiles.forEach(tile => {
        tile.setAttribute("tabindex", "0");
        tile.setAttribute("role", "button");
        tile.setAttribute("data-emoji", tile.innerHTML.trim());
    });

    // Clipboard Integration
    const copyToClipboard = (tile) => {
        const emoji = tile.getAttribute("data-emoji");
        const hex = Array.from(emoji).map(c => `U+${c.codePointAt(0).toString(16).toUpperCase()}`).join(' ');

        navigator.clipboard.writeText(emoji).then(() => {
            toast.innerHTML = `Copied ${emoji} <span style="opacity:0.7; font-size:0.8em; margin-left:5px;">(${hex})</span>`;
            toast.classList.add("show");
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => toast.classList.remove("show"), 2000);
        }).catch(err => console.error("Clipboard write blocked:", err));
    };

    const updatePreview = (tile) => {
        gridzoom.innerHTML = tile.getAttribute("data-emoji");
    };

    // Performance Throttling
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

    // Mouse & Focus Interactions
    grid.addEventListener("mousemove", throttle((e) => {
        const tile = e.target.closest(".character-grid-list > li");
        if (tile && !tile.hasAttribute("data-hidden")) updatePreview(tile);
    }, 60));

    grid.addEventListener("click", (e) => {
        const tile = e.target.closest(".character-grid-list > li");
        if (tile && !tile.hasAttribute("data-hidden")) copyToClipboard(tile);
    });

    grid.addEventListener("focusin", (e) => {
        const tile = e.target.closest(".character-grid-list > li");
        if (tile) updatePreview(tile);
    });

    // 3. Smart Search Engine (Fetching Official Unicode Dictionary)
    let emojiDictionary = [];
    
    // Fetch external dictionary mappings silently in the background
    fetch("https://unpkg.com/emoji.json@14.0.0/emoji.json")
        .then(res => res.json())
        .then(data => { emojiDictionary = data; })
        .catch(err => console.warn("Could not load emoji dictionary for search.", err));

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const categories = grid.querySelectorAll("h3, .character-grid-list");

            // If search is empty, show everything
            if (!query) {
                emojiTiles.forEach(t => {
                    t.style.display = "";
                    t.removeAttribute("data-hidden");
                });
                categories.forEach(c => c.style.display = "");
                return;
            }

            // Filter logic
            const lists = grid.querySelectorAll(".character-grid-list");
            lists.forEach(list => {
                let hasVisibleItems = false;
                const items = list.querySelectorAll("li");
                
                items.forEach(item => {
                    const char = item.getAttribute("data-emoji");
                    
                    // Look up the emoji's text name in the fetched dictionary
                    const dictEntry = emojiDictionary.find(emojiObj => emojiObj.char === char);
                    const keywords = dictEntry ? dictEntry.name.toLowerCase() : "";

                    // Match if query is the literal character OR is inside the dictionary name
                    if (char === query || keywords.includes(query)) {
                        item.style.display = "";
                        item.removeAttribute("data-hidden");
                        hasVisibleItems = true;
                    } else {
                        item.style.display = "none";
                        item.setAttribute("data-hidden", "true");
                    }
                });

                // Hide empty category headers
                const heading = list.previousElementSibling;
                if (hasVisibleItems) {
                    list.style.display = "";
                    if (heading && heading.tagName === "H3") heading.style.display = "";
                } else {
                    list.style.display = "none";
                    if (heading && heading.tagName === "H3") heading.style.display = "none";
                }
            });
        });
    }

    // 4. Spatial Coordinate Keyboard Navigation Traversal (Arrow Keys)
    grid.addEventListener("keydown", (e) => {
        const currentTile = e.target.closest(".character-grid-list > li");
        if (!currentTile) return;

        // Handle Activation Triggers
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            copyToClipboard(currentTile);
            return;
        }

        const allowedKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        if (!allowedKeys.includes(e.key)) return;

        // Lock standard viewport window scrolling while operating matrix arrows
        e.preventDefault(); 

        // Gather all currently active, unfiltered emoji layout elements
        const activeTiles = Array.from(grid.querySelectorAll(".character-grid-list > li:not([data-hidden])"));
        if (activeTiles.length === 0) return;

        const currentRect = currentTile.getBoundingClientRect();
        const currentCenterX = currentRect.left + currentRect.width / 2;
        const currentCenterY = currentRect.top + currentRect.height / 2;

        let bestMatch = null;
        let minDistance = Infinity;

        // Loop through all alternatives to locate the geometrically closest element
        activeTiles.forEach(tile => {
            if (tile === currentTile) return;

            const tileRect = tile.getBoundingClientRect();
            const tileCenterX = tileRect.left + tileRect.width / 2;
            const tileCenterY = tileRect.top + tileRect.height / 2;

            const deltaX = tileCenterX - currentCenterX;
            const deltaY = tileCenterY - currentCenterY;

            let isValidDirection = false;
            let score = 0;

            // Enforce directional layout constraints and compute directional weight thresholds
            switch (e.key) {
                case "ArrowLeft":
                    // Must be to the left, roughly on the same row alignment
                    if (tileCenterX < currentCenterX && Math.abs(deltaY) < currentRect.height) {
                        isValidDirection = true;
                        score = Math.abs(deltaX);
                    }
                    break;
                case "ArrowRight":
                    // Must be to the right, roughly on the same row alignment
                    if (tileCenterX > currentCenterX && Math.abs(deltaY) < currentRect.height) {
                        isValidDirection = true;
                        score = Math.abs(deltaX);
                    }
                    break;
                case "ArrowUp":
                    // Must be physically above, penalizing horizontal deviation
                    if (tileCenterY < currentCenterY) {
                        isValidDirection = true;
                        // Using weighted Euclidean distance to favor columns matching perfectly straight up
                        score = Math.sqrt((deltaX * 2) * (deltaX * 2) + deltaY * deltaY);
                    }
                    break;
                case "ArrowDown":
                    // Must be physically below, penalizing horizontal deviation
                    if (tileCenterY > currentCenterY) {
                        isValidDirection = true;
                        // Using weighted Euclidean distance to favor columns matching perfectly straight down
                        score = Math.sqrt((deltaX * 2) * (deltaX * 2) + deltaY * deltaY);
                    }
                    break;
            }

            // Track item holding lowest geometric offset displacement
            if (isValidDirection && score < minDistance) {
                minDistance = score;
                bestMatch = tile;
            }
        });

        // Set focus to the visually closest tile and scroll it smoothly into view if needed
        if (bestMatch) {
            bestMatch.focus();
            bestMatch.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    });
});