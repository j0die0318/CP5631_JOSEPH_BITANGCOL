/**
 * 100SMILES DENTAL CARE - MAIN JAVASCRIPT
 * Handles interactive elements and responsive behavior
 * 
 * Table of Contents:
 * 1. Mobile Menu Toggle
 * 2. Click Outside Handler
 */

/**
 * ===== 1. MOBILE MENU TOGGLE =====
 * Toggles the mobile navigation menu visibility
 * Manages body scroll to prevent background scrolling when menu is open
 * 
 * @returns {void}
 */
function hamburger() {
    // Get the mobile menu element
    var menu = document.getElementById("menu-links");
    
    // Check if menu is currently active
    if (menu.classList.contains("active")) {
        // Close the menu
        menu.classList.remove("active");
        // Re-enable page scrolling
        document.body.style.overflow = "auto";
    } else {
        // Open the menu
        menu.classList.add("active");
        // Prevent page scrolling when menu is open
        document.body.style.overflow = "hidden";
    }
}

/**
 * ===== 2. CLICK OUTSIDE HANDLER =====
 * Closes the mobile menu when clicking outside of it
 * 
 * @param {Event} event - The click event object
 * @returns {void}
 */
window.onclick = function(event) {
    var menu = document.getElementById("menu-links");
    var menuIcon = document.querySelector(".menu-icon");
    
    // Check if click is outside menu and menu icon
    if (event.target !== menu && 
        event.target !== menuIcon && 
        !menuIcon.contains(event.target)) {
        // Close the menu
        menu.classList.remove("active");
        // Re-enable page scrolling
        document.body.style.overflow = "auto";
    }
};