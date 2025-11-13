// Wait for the DOM to be fully loaded before running any script
document.addEventListener("DOMContentLoaded", function() {

// --- 1. Accordion Logic (for focus.html) ---
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Check if any accordion headers exist on this page
if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const content = item.querySelector(".accordion-content"); // Changed to use querySelector

            // Toggle the .active class on the accordion item
            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                // If active, set max-height to its actual content height
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // If not active, set max-height back to null (so it collapses)
                content.style.maxHeight = null;
            }
        });
    });
}

});