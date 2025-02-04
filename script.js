document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const desktopBg = document.querySelector(".desktop-background");
    const mobileBg = document.querySelector(".mobile-background");
    const content = document.querySelector(".content");

    // Detect screen size and adjust images
    function adjustBackground() {
        if (window.innerWidth <= 768) {
            desktopBg.style.display = "none";
            mobileBg.style.display = "block";
            content.style.top = "10%"; // Adjust text position on mobile
        } else {
            desktopBg.style.display = "block";
            mobileBg.style.display = "none";
            content.style.top = "5%"; // Keep default position for desktop
        }
    }

    // Run on load and window resize
    adjustBackground();
    window.addEventListener("resize", adjustBackground);
});
