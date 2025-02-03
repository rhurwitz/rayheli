const images = document.querySelectorAll('.background-container img');
let currentIndex = 0;

function rotateBackground() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Change image every 20 seconds
const intervalId = setInterval(rotateBackground, 20000);

// Keep text color always black
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".content").style.color = "black";
});

// Optionally, clear the interval when the user navigates away
window.addEventListener('beforeunload', () => {
    clearInterval(intervalId);
});
